import { StyleSheet } from 'react-native'
import { colors } from '../../res';
import { EdgeInsets } from 'react-native-safe-area-context';
export const styles = (insets: EdgeInsets) => StyleSheet.create({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: colors.background,
    paddingTop: insets.top,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  arrowButton: {
    width: 14,
    height: 8,
    objectFit: 'contain'
  }
})