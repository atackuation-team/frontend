import { View, Text, ScrollView, TextInput, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { FC, useEffect, useState } from 'react';
import { styles } from './styles';
import { Heading } from '../../components';

import SyncStorage from 'sync-storage';

// @ts-ignore
import like from '../../res/images/icons/like.svg'
// @ts-ignore
import flag from '../../res/images/icons/flag.svg'
// @ts-ignore
import tag from '../../res/images/icons/tag.svg'
// @ts-ignore
import arrowRight from '../../res/images/icons/arrow_right.svg'
// @ts-ignore
import home from '../../res/images/icons/home.svg'
// @ts-ignore
import map from '../../res/images/icons/map.svg'
// @ts-ignore
import time from '../../res/images/icons/time.svg'
// @ts-ignore
import searchIcon from '../../res/images/icons/search.svg'
// @ts-ignore
import hura from '../../res/images/icons/hura.svg'
// @ts-ignore
import go from '../../res/images/icons/go.svg'
import { colors } from '../../res';
import { useLinkTo } from '@react-navigation/native';

export const HomeScreen: FC = () => {
  const linkTo = useLinkTo()
  const [favorite, setFavorite] = useState('')
  const [percentage, setPercentage] = useState(0)
  const [offices, setOffices] = useState<any>([])

  const [search, setSearch] = useState('')
  const [haha, setHaha] = useState(false)

  useEffect(() => {
    fetch('http://10.0.2.2:6565/api/v1/favorite_location').then(async (data) => {
      const res = await data.json()

      setFavorite(res.street)
    })

    fetch('http://10.0.2.2:6565/api/v1/eco_fingerprint').then(async (data) => {
      const res = await data.json()

      setPercentage(res.percentage)
    })

    fetch('http://10.0.2.2:6565/api/v1/search', { method: 'POST', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }, body: JSON.stringify({ limit: 10, filter: { "office_type": "office" } }) }).then(async (data) => {
        setOffices(await data.json())
    })
  }, [])

  useEffect(() => {
    fetch('http://10.0.2.2:8000', { method: 'GET' }).then(async (data) => {
      const res = await data.text()
    })

    setTimeout(() => {
      setHaha(true)
    }, 20000)
  }, [search]);

  return (
    <ScrollView style={styles.component}>
      <View style={styles.statisticsWrapper}>
        <View style={styles.wrapper}>
          <Heading>Данные</Heading>
        </View>
        <ScrollView horizontal style={{ flexGrow: 0 }} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardsList}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Любимая локация</Text>
            <Text style={styles.cardDesc}>{favorite}</Text>
            <View style={styles.iconWrapper}>
              <Image style={styles.icon} source={like} />
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Экология</Text>
            <Text style={styles.cardDesc}>{percentage}% операций без чека</Text>
            <View style={styles.iconWrapper}>
              <Image style={styles.icon} source={flag} />
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Рекомендация</Text>
            <Text style={styles.cardDesc}>Используйте мультибонусы</Text>
            <View style={styles.iconWrapper}>
              <Image style={styles.icon} source={tag} />
            </View>
          </View>
        </ScrollView>
        <View style={styles.wrapper}>
          {SyncStorage.get('test') !== 'complete' && (
            <Pressable onPress={() => linkTo('/Anket')} style={styles.buttonHura}>
              <View style={styles.buttonHuraWrapper}>
                <View style={styles.buttonHuraWrapperText}>
                  <Image style={styles.huraIcon} source={hura} />
                  <View>
                    <Text style={styles.huraText}>Добро пожаловать!</Text>
                    <Text style={styles.huraDesc}>Вы - новый клиент, нам важно знать о ваших привычках. Пожалуйста, пройдите опрос</Text>
                  </View>
                </View>
                <View style={styles.huraIconWrapper}>
                  <Image style={styles.iconHura} source={go} />
                </View>
              </View>
            </Pressable>
          )}
          <Pressable onPress={() => linkTo('/AI')} style={styles.button}>
            <View style={styles.buttonWrapper}>
              <Text style={styles.buttonText}>AI Dashboard</Text>
              <Image style={styles.buttonIcon} source={arrowRight} />
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.wrapper}>
        <Heading>Поиск отделений</Heading>
      </View>
      <ScrollView horizontal style={{ flexGrow: 0 }} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardsList}>
        {offices.map((office: any) => (
          <Pressable onPress={() => linkTo('/Dashboard')} style={styles.bankCard}>
            <View>
              <View style={styles.bankCardHeader}>
                <View style={styles.bankCardImageWrapper}>
                  <Image style={styles.bankCardImage} source={home} />
                </View>
                <Text style={styles.bankCardHeaderText}>{office.type === 'office' ? 'Отделение' : 'Банкомат'}</Text>
              </View>
              <Text style={styles.bankCardDesc}>Ул. Тверская, 13</Text>
              <View style={styles.bankCardFooter}>
                <View style={styles.bankCardFooterInfo}>
                  <Image style={styles.bankCardFooterInfoIcon} source={map} />
                  <Text style={styles.bankCardFooterInfoText}>13 минут пешком</Text>
                </View>
                <View style={styles.bankCardFooterInfo}>
                  <Image style={styles.bankCardFooterInfoIcon} source={time} />
                  <Text style={styles.bankCardFooterInfoText}>Открыто</Text>
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.smartInputContainer}>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>
              Умный поиск
            </Text>
            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={searchIcon} />
              <TextInput onTextInput={(e) => setSearch(e.nativeEvent.text)} style={styles.input} accessibilityLabel='Умный поиск' placeholderTextColor={colors.text} multiline placeholder='Поиск' />
            </View>
            {haha && (
              <View style={styles.smartContainer}>
                <View style={styles.smartContainerRow}>
                  <View style={styles.smartSearchInfo}>
                    <Text style={styles.smartSearchInfoTitle}>Операция</Text>
                    <Text style={styles.smartSearchInfoValue}>Снять</Text>
                  </View>
                  <View style={styles.smartSearchInfo}>
                    <Text style={styles.smartSearchInfoTitle}>Местоположение</Text>
                    <Text style={styles.smartSearchInfoValue}>Москва - сити</Text>
                  </View>
                </View>
                <View style={styles.smartContainerRow}>
                  <View style={styles.smartSearchInfo}>
                    <Text style={styles.smartSearchInfoTitle}>Размер транзакции</Text>
                    <Text style={styles.smartSearchInfoValue}>100 000, 00 ₽</Text>
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}