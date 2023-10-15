import { View, Text, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import React, { FC } from 'react';
import { styles } from './styles';
import { Heading } from '../../components';

// @ts-ignore
import home from '../../res/images/icons/home.svg'
// @ts-ignore
import time from '../../res/images/icons/time_blue.svg'

export const AIScreen: FC = () => {
  return (
    <View style={styles.component}>
      <View style={styles.statisticsWrapper}>
        <View style={styles.wrapper}>
          <Heading>Статистика</Heading>
        </View>
        <ScrollView horizontal style={{ flexGrow: 0 }} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardsList}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Средний размер транзакции</Text>
            <Text style={styles.cardDesc}>1 005 210, 00 ₽</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Популярные операции</Text>
            <Text style={styles.cardDesc}>Снятие</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Частота посещения</Text>
            <Text style={styles.cardDesc}>5 раз до 12:00</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Использованные мультибонусы</Text>
            <Text style={styles.cardDesc}>2000</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>Операции</Text>
        <ScrollView style={{ flexGrow: 0 }} showsVerticalScrollIndicator={false} contentContainerStyle={styles.operationList}>
          <View style={styles.operationCard}>
            <View>
              <View style={styles.operationCardHeader}>
                <View style={styles.operationCardImageWrapper}>
                  <Image style={styles.operationCardImage} source={home} />
                </View>
                <Text style={styles.operationCardHeaderText}>Ул. Тверская 13</Text>
              </View>
              <Text style={styles.operationCardDesc}>- 30 000, 00 ₽</Text>
              <View style={styles.operationCardFooter}>
                <View style={styles.bottomSheetContainerInfo}>
                  <Image source={time} style={styles.bottomSheetContainerIcon} />
                  <View style={styles.bottomSheetContainerTextWrapper}>
                    <Text style={styles.bottomSheetContainerTextWrapperTitle}>~ 5 минут</Text>
                    <Text style={styles.bottomSheetContainerTextWrapperDesc}>Время операции</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.operationCard}>
            <View>
              <View style={styles.operationCardHeader}>
                <View style={styles.operationCardImageWrapper}>
                  <Image style={styles.operationCardImage} source={home} />
                </View>
                <Text style={styles.operationCardHeaderText}>Ул. Тверская 13</Text>
              </View>
              <Text style={styles.operationCardDesc}>- 30 000, 00 ₽</Text>
              <View style={styles.operationCardFooter}>
                <View style={styles.bottomSheetContainerInfo}>
                  <Image source={time} style={styles.bottomSheetContainerIcon} />
                  <View style={styles.bottomSheetContainerTextWrapper}>
                    <Text style={styles.bottomSheetContainerTextWrapperTitle}>~ 5 минут</Text>
                    <Text style={styles.bottomSheetContainerTextWrapperDesc}>Время операции</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.operationCard}>
            <View>
              <View style={styles.operationCardHeader}>
                <View style={styles.operationCardImageWrapper}>
                  <Image style={styles.operationCardImage} source={home} />
                </View>
                <Text style={styles.operationCardHeaderText}>Ул. Тверская 13</Text>
              </View>
              <Text style={styles.operationCardDesc}>- 30 000, 00 ₽</Text>
              <View style={styles.operationCardFooter}>
                <View style={styles.bottomSheetContainerInfo}>
                  <Image source={time} style={styles.bottomSheetContainerIcon} />
                  <View style={styles.bottomSheetContainerTextWrapper}>
                    <Text style={styles.bottomSheetContainerTextWrapperTitle}>~ 5 минут</Text>
                    <Text style={styles.bottomSheetContainerTextWrapperDesc}>Время операции</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}