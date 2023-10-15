import { FC } from 'react';
import { styles } from './styles';
import { Image } from 'expo-image';
import { TouchableHighlight, View } from 'react-native';

// @ts-ignore
import arrow from '../../res/images/icons/arrow_bottom.svg'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const AppBar: FC = () => {
  const insets = useSafeAreaInsets();
  const style = styles(insets)

  return (
    <View style={style.appBar}>
      <Image source={{ uri: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80' }} style={style.image} />
      <TouchableHighlight>
        <Image style={style.arrowButton} source={arrow} />
      </TouchableHighlight>
    </View>
  )
}