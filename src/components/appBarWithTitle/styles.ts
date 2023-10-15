import { StyleSheet } from 'react-native'
import { colors } from '../../res';
import { EdgeInsets } from 'react-native-safe-area-context';
export const styles = (insets: EdgeInsets) => StyleSheet.create({
  appBar: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: colors.background,
    paddingTop: insets.top,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  arrowButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    position: 'absolute',
    left: 20,
    top: insets.top - 7
  },
  arrowButton: {
    width: 8,
    height: 14,
    objectFit: 'contain'
  },
  appBarTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "600"
  }
})