import { ScrollView, View, Text, Pressable } from 'react-native';
import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { styles } from './styles';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from "expo-location";
import BottomSheet, { BottomSheetScrollView, BottomSheetView } from '@gorhom/bottom-sheet';

import { createOpenLink } from 'react-native-open-maps';

// @ts-ignore
import load from '../../res/images/icons/load.svg'
// @ts-ignore
import capacity from '../../res/images/icons/capacity.svg'
// @ts-ignore
import user from '../../res/images/icons/user.svg'
// @ts-ignore
import time from '../../res/images/icons/time_blue.svg'
// @ts-ignore
import inclusive from '../../res/images/icons/inclusive.svg'
// @ts-ignore
import eye from '../../res/images/icons/eye.svg'
// @ts-ignore
import qr from '../../res/images/icons/qr.svg'
// @ts-ignore
import goods from '../../res/images/icons/goods.svg'
// @ts-ignore
import money from '../../res/images/icons/money.svg'
// @ts-ignore
import transfers from '../../res/images/icons/transfer.svg'
// @ts-ignore
import star from '../../res/images/icons/star.svg'

import Svg, { Path } from 'react-native-svg';
import { colors } from '../../res';
import { Image } from 'expo-image';
import { LocationGeocodedLocation, LocationObject } from 'expo-location';

export const DashboardScreen: FC = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [pathMethod, setPathMethod] = useState(0)
  const [currentLocation, setCurrentLocation] = useState<null | LocationObject>(null)

  const snapPoints = useMemo(() => ['20%', '70%%'], []);
  const createRoute = async () => {
    const openLink = createOpenLink({ provider: 'yandex', zoom: 0, travelType: pathMethod === 0 ? 'walk' : 'drive', latitude: currentLocation?.coords.latitude, longitude: currentLocation?.coords.longitude })

    openLink()
  }

  useEffect(() => {
    const getPermissions = async () => {
      await Location.requestBackgroundPermissionsAsync();

      let location = await Location.getCurrentPositionAsync({});

      setCurrentLocation(location)
    }

    getPermissions()
  }, []);

  return (
    <>
      <ScrollView style={styles.component}>
        {currentLocation && (
          <MapView initialRegion={{
            latitude: currentLocation?.coords.latitude,
            longitude: currentLocation?.coords.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }} style={styles.map}>
            <Marker
              coordinate={{latitude: currentLocation?.coords.latitude, longitude: currentLocation?.coords.longitude}}
            />
          </MapView>
        )}
      </ScrollView>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        backgroundStyle={styles.bottomSheet}
        handleStyle={styles.bottomSheetHandle}
        handleIndicatorStyle={styles.bottomSheetHandleIndicator}
      >
        <BottomSheetView style={styles.bottomSheetTitle}>
          <Text style={styles.bottomSheetTitleText}>Ул. Тверская, 13</Text>
          <Text style={styles.bottomSheetTitleDesc}>Банкомат</Text>
          <View style={styles.bottomSheetLine}></View>
        </BottomSheetView>
        <BottomSheetScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.bottomSheetContent}>
          <View style={styles.bottomSheetContainer}>
            <Text style={styles.bottomSheetContainerTitle}>Маршрут</Text>
            <View style={styles.radioButtonContainer}>
              <Pressable onPress={() => setPathMethod(0)} style={pathMethod === 0 ? styles.radioButtonSelected : styles.radioButton}>
                <Svg width='8' height='12' viewBox="0 0 9 13" fill="none">
                  <Path d="M1.38133 4.207L3.25092 2.849C3.46092 2.69558 3.71583 2.61683 3.976 2.625C4.29305 2.63291 4.59975 2.7394 4.85348 2.92967C5.10721 3.11993 5.29535 3.38453 5.39175 3.68667C5.50025 4.02675 5.59942 4.25658 5.68925 4.37617C5.96068 4.7383 6.31278 5.03219 6.71761 5.2345C7.12244 5.43681 7.56885 5.54198 8.02142 5.54167L8.02142 6.70833C7.41901 6.70895 6.82396 6.57602 6.27909 6.31912C5.73421 6.06221 5.25306 5.68772 4.87025 5.22258L4.46367 7.52967L5.66592 8.53883L6.96267 12.1018L5.866 12.5008L4.676 9.23183L2.6985 7.57225C2.53622 7.44121 2.41203 7.26905 2.33888 7.07371C2.26573 6.87837 2.24629 6.66699 2.28258 6.46158L2.5795 4.77867L2.18458 5.06567L0.943833 6.77367L4.01341e-10 6.08767L1.37142 4.2L1.38133 4.207ZM4.81308 2.33333C4.50366 2.33333 4.20692 2.21042 3.98813 1.99162C3.76933 1.77283 3.64642 1.47609 3.64642 1.16667C3.64642 0.857247 3.76933 0.560501 3.98813 0.341709C4.20692 0.122916 4.50366 -2.96912e-10 4.81308 -3.17311e-10C5.1225 -3.3771e-10 5.41925 0.122916 5.63804 0.341709C5.85683 0.560501 5.97975 0.857247 5.97975 1.16667C5.97975 1.47609 5.85683 1.77283 5.63804 1.99162C5.41925 2.21042 5.1225 2.33333 4.81308 2.33333ZM3.07942 10.0222L1.20458 12.2564L0.310917 11.5068L2.04692 9.43833L2.48208 8.16667L3.52683 9.04167L3.07942 10.0222Z" fill={pathMethod === 0 ? colors.light : colors.blue} />
                </Svg>
                <Text style={pathMethod === 0 ? styles.radioButtonTextSelected : styles.radioButtonText}>8 мин</Text>
              </Pressable>
              <Pressable onPress={() => setPathMethod(1)} style={pathMethod === 1 ? styles.radioButtonSelected : styles.radioButton}>
                <Svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <Path d="M13.9028 2.75681C13.8695 2.65992 13.7516 2.58458 13.6531 2.58458H12.3738C12.2754 2.58458 12.1574 2.65992 12.1241 2.75681C12.0915 2.85163 12.0672 2.93624 12.051 3.01581L11.1965 0.65174C11.0556 0.261909 10.6823 0 10.2678 0H3.73222C3.3177 0 2.94451 0.261909 2.8035 0.651811L1.94895 3.01609C1.93273 2.93645 1.9084 2.85174 1.8758 2.75681C1.84252 2.65992 1.72453 2.58458 1.62609 2.58458H0.34684C0.248398 2.58458 0.130409 2.65992 0.097134 2.75681C-0.0324194 3.13401 -0.0323484 3.34994 0.0971695 3.72718C0.130445 3.82406 0.248433 3.89941 0.346876 3.89941H1.62613C1.62733 3.89941 1.62861 3.89909 1.62985 3.89905L1.61055 3.95252C1.34971 4.03918 1.16137 4.28474 1.16137 4.57471V8.90815C1.16137 8.94955 1.16952 8.99055 1.18536 9.0288C1.2012 9.06705 1.22443 9.10181 1.2537 9.13108C1.28298 9.16036 1.31773 9.18358 1.35599 9.19942C1.39424 9.21526 1.43523 9.22341 1.47664 9.22341H3.06331C3.14692 9.22341 3.22711 9.1902 3.28624 9.13107C3.34536 9.07195 3.37857 8.99176 3.37857 8.90815V7.37344H10.6214V8.90815C10.6214 8.99176 10.6546 9.07195 10.7138 9.13107C10.7729 9.1902 10.8531 9.22341 10.9367 9.22341H12.5234C12.5648 9.22341 12.6058 9.21526 12.644 9.19942C12.6823 9.18358 12.717 9.16036 12.7463 9.13108C12.7756 9.10181 12.7988 9.06705 12.8146 9.0288C12.8305 8.99055 12.8386 8.94955 12.8386 8.90815V4.57471C12.8386 4.28481 12.6504 4.03929 12.3896 3.95255L12.3703 3.89905C12.3715 3.89909 12.3727 3.89937 12.3739 3.89937H13.6531C13.7516 3.89937 13.8696 3.82403 13.9028 3.72714C14.0324 3.34994 14.0323 3.13401 13.9028 2.75681ZM3.85294 1.16016H10.1462L11.1433 3.91874H2.85586L3.85294 1.16016ZM4.02847 5.86208H2.70108C2.41629 5.86208 2.18546 5.63125 2.18546 5.34646C2.18546 5.0617 2.41625 4.83083 2.70108 4.83083H4.02847C4.31323 4.83083 4.54409 5.06167 4.54409 5.34646C4.54413 5.63125 4.31323 5.86208 4.02847 5.86208ZM11.2988 5.86208H9.97143C9.68668 5.86208 9.45581 5.63125 9.45581 5.34646C9.45581 5.0617 9.68668 4.83083 9.97143 4.83083H11.2988C11.5836 4.83083 11.8144 5.06167 11.8144 5.34646C11.8144 5.63125 11.5836 5.86208 11.2988 5.86208Z" fill={pathMethod === 1 ? colors.light : colors.blue} />
                </Svg>
                <Text style={pathMethod === 1 ? styles.radioButtonTextSelected : styles.radioButtonText}>2 мин</Text>
              </Pressable>
            </View>
            <Pressable onPress={createRoute} style={styles.button}>
              <Text style={styles.buttonText}>Построить маршрут</Text>
            </Pressable>
            <Text style={styles.bottomSheetTitleT}><Text style={styles.bottomSheetTitleW}>+ 20 мультибонусов</Text> за посещение</Text>
          </View>
          <View style={styles.bottomSheetContainer}>
            <Text style={styles.bottomSheetContainerTitle}>Обслуживание</Text>
            <View style={styles.bottomSheetContainerInfoWrapper}>
              <View style={styles.bottomSheetContainerInfo}>
                <Image source={load} style={styles.bottomSheetContainerIcon} />
                <View style={styles.bottomSheetContainerTextWrapper}>
                  <View style={styles.stepperContainer}>
                    <Text style={styles.bottomSheetContainerTextWrapperTitle}>~ 15 мин</Text>
                    <View style={styles.stepper}>
                      <View style={styles.stepFilled}></View>
                      <View style={styles.stepFilled}></View>
                      <View style={styles.stepFilled}></View>
                      <View style={styles.step}></View>
                      <View style={styles.step}></View>
                    </View>
                  </View>
                  <Text style={styles.bottomSheetContainerTextWrapperDesc}>Загруженность</Text>
                </View>
              </View>
              <View style={styles.bottomSheetContainerInfo}>
                <Image source={capacity} style={styles.bottomSheetContainerIcon} />
                <View style={styles.bottomSheetContainerTextWrapper}>
                  <View style={styles.stepperContainer}>
                    <Text style={styles.bottomSheetContainerTextWrapperTitle}>4 / 5</Text>
                    <View style={styles.stepper}>
                      <View style={styles.stepFilled}></View>
                      <View style={styles.stepFilled}></View>
                      <View style={styles.stepFilled}></View>
                      <View style={styles.stepFilled}></View>
                      <View style={styles.step}></View>
                    </View>
                  </View>
                  <Text style={styles.bottomSheetContainerTextWrapperDesc}>Заполненность</Text>
                </View>
              </View>
              <View style={styles.bottomSheetContainerInfo}>
                <Image source={inclusive} style={styles.bottomSheetContainerIcon} />
                <View style={styles.bottomSheetContainerTextWrapper}>
                  <Text style={styles.bottomSheetContainerTextWrapperTitle}>Доступно</Text>
                  <Text style={styles.bottomSheetContainerTextWrapperDesc}>Инклюзивная среда</Text>
                </View>
              </View>
              <View style={styles.bottomSheetContainerInfo}>
                <Image source={eye} style={styles.bottomSheetContainerIcon} />
                <View style={styles.bottomSheetContainerTextWrapper}>
                  <Text style={styles.bottomSheetContainerTextWrapperTitle}>Оборудован</Text>
                  <Text style={styles.bottomSheetContainerTextWrapperDesc}>Для слабовидящих и незрячих</Text>
                </View>
              </View>
              <View style={styles.bottomSheetContainerInfo}>
                <Image source={star} style={styles.bottomSheetContainerIcon} />
                <View style={styles.bottomSheetContainerTextWrapper}>
                  <Text style={styles.bottomSheetContainerTextWrapperTitle}>Доступно</Text>
                  <Text style={styles.bottomSheetContainerTextWrapperDesc}>Обслуживание прайм-клиентов</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bottomSheetContainer}>
            <Text style={styles.bottomSheetContainerTitle}>Загруженность</Text>
            <View style={styles.bottomSheetContainerInfoWrapper}>
              <View style={styles.bottomSheetContainerInfo}>
                <Image source={user} style={styles.bottomSheetContainerIcon} />
                <View style={styles.bottomSheetContainerTextWrapper}>
                  <View style={styles.stepperContainer}>
                    <Text style={styles.bottomSheetContainerTextWrapperTitle}>~ 10 мин</Text>
                    <View style={styles.stepper}>
                      <View style={styles.stepFilled}></View>
                      <View style={styles.stepFilled}></View>
                      <View style={styles.step}></View>
                      <View style={styles.step}></View>
                      <View style={styles.step}></View>
                    </View>
                  </View>
                  <Text style={styles.bottomSheetContainerTextWrapperDesc}>Среднее время в очереди</Text>
                </View>
              </View>
              <View style={styles.bottomSheetContainerInfo}>
                <Image source={time} style={styles.bottomSheetContainerIcon} />
                <View style={styles.bottomSheetContainerTextWrapper}>
                  <View style={styles.stepperContainer}>
                    <Text style={styles.bottomSheetContainerTextWrapperTitle}>~ 5 мин</Text>
                    <View style={styles.stepper}>
                      <View style={styles.stepFilled}></View>
                      <View style={styles.step}></View>
                      <View style={styles.step}></View>
                      <View style={styles.step}></View>
                      <View style={styles.step}></View>
                    </View>
                  </View>
                  <Text style={styles.bottomSheetContainerTextWrapperDesc}>Среднее время операции</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bottomSheetContainer}>
            <Text style={styles.bottomSheetContainerTitle}>Услуги</Text>
            <View style={styles.bottomSheetContainerInfoWrapper}>
              <View style={styles.bottomSheetContainerInfo}>
                <Image source={qr} style={styles.bottomSheetContainerIcon} />
                <View style={styles.bottomSheetContainerTextWrapper}>
                  <Text style={styles.bottomSheetContainerTextWrapperTitle}>QR - платежи</Text>
                </View>
              </View>
              <View style={styles.bottomSheetContainerInfo}>
                <Image source={goods} style={styles.bottomSheetContainerIcon} />
                <View style={styles.bottomSheetContainerTextWrapper}>
                  <Text style={styles.bottomSheetContainerTextWrapperTitle}>Оплата услуг</Text>
                </View>
              </View>
              <View style={styles.bottomSheetContainerInfo}>
                <Image source={money} style={styles.bottomSheetContainerIcon} />
                <View style={styles.bottomSheetContainerTextWrapper}>
                  <Text style={styles.bottomSheetContainerTextWrapperTitle}>Снятие наличных</Text>
                </View>
              </View>
              <View style={styles.bottomSheetContainerInfo}>
                <Image source={transfers} style={styles.bottomSheetContainerIcon} />
                <View style={styles.bottomSheetContainerTextWrapper}>
                  <Text style={styles.bottomSheetContainerTextWrapperTitle}>Переводы</Text>
                </View>
              </View>
            </View>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </>
  )
}