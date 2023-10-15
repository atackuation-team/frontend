import { FC } from 'react';
import { styles } from './styles';
import { Image } from 'expo-image';
import { Text, TouchableHighlight, View } from 'react-native';

// @ts-ignore
import arrow from '../../res/images/icons/arrow_left.svg'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppBarWithTitleProps } from './types';
import { useNavigation } from '@react-navigation/native';

export const AppBarWithTitle: FC<AppBarWithTitleProps> = ({ title }) => {
  const insets = useSafeAreaInsets();
  const style = styles(insets)

  const navigate = useNavigation()

  return (
    <View style={style.appBar}>
      <TouchableHighlight onPress={() => navigate.goBack()} style={style.arrowButtonContainer}>
        <Image style={style.arrowButton} source={arrow} />
      </TouchableHighlight>
      <Text style={style.appBarTitle}>{title}</Text>
    </View>
  )
}