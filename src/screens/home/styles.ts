import { Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../res';

export const styles = StyleSheet.create({
  component: {
    backgroundColor: colors.background,
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 20
  },
  statisticsWrapper: {
    marginBottom: 40
  },
  detachModal: {
    marginHorizontal: 13,
    borderRadius: 15,
    backgroundColor: colors.grey['600']
  },
  detachModalContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.grey['600']
  },
  cardsList: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    flexGrow: 0,
    paddingHorizontal: 20,
    marginVertical: 25
  },
  card: {
    width: 170,
    backgroundColor: 'rgba(21, 49, 99, .20)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.blue,
    borderRadius: 15,
    padding: 20,
  },
  cardTitle: {
    color: colors.blue,
    fontSize: 12
  },
  cardDesc: {
    marginTop: 4,
    color: colors.text,
    fontSize: 18,
    fontWeight: "600",
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
    width: 30,
    height: 30,
    borderRadius: 100,
    marginTop: 18,
    aspectRatio: 1
  },
  icon: {
    width: 14,
    height: 14,
  },
  button: {
    backgroundColor: colors.blue,
    width: '100%',
    borderRadius: 15,
    minHeight: 40,
    padding: 22
  },
  huraIconWrapper: {
    alignSelf: 'flex-end',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
    width: 40,
    height: 40,
    borderRadius: 100,
    marginTop: 25,
    aspectRatio: 1
  },
  iconHura: {
    width: 15,
    height: 15,
  },
  huraIcon: {
    width: 40,
    height: 40
  },
  huraText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text
  },
  huraDesc: {
    fontSize: 12,
    color: colors.grey['400'],
    marginTop: 4,
    lineHeight: 20,
  },
  buttonHuraWrapper: {
    flexDirection: 'column',
  },
  buttonHuraWrapperText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  buttonHura: {
    backgroundColor: 'rgba(21, 49, 99, .20)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.blue,
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: colors.text,
    fontWeight: "600"
  },
  buttonIcon: {
    width: 16,
    height: 16
  },
  bankCard: {
    position: 'relative',
    backgroundColor: colors.grey['600'],
    padding: 16,
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.grey['500'],
    minWidth: 320
  },
  multibonuses: {
    fontSize: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: colors.blue,
    color: colors.text,
    top: -16,
    right: -16,
    borderTopEndRadius: 15,
    position: 'absolute',
  },
  bankCardHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20
  },
  bankCardHeaderText: {
    fontSize: 14,
    color: colors.text,
  },
  bankCardImageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
    width: 20,
    height: 20,
    borderRadius: 100,
    aspectRatio: 1
  },
  bankCardImage: {
    width: 10,
    height: 10
  },
  bankCardDesc: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "600",
  },
  bankCardFooter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginTop: 30
  },
  bankCardFooterInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  bankCardFooterInfoIcon: {
    width: 10,
    height: 10,
  },
  bankCardFooterInfoText: {
    color: colors.text,
    fontSize: 12
  },
  smartInputContainer: {
    backgroundColor: colors.grey['600'],
    padding: 16,
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.grey['500'],
    marginBottom: 40
  },
  inputWrapper: {

  },
  inputLabel: {
    color: colors.grey['400'],
    marginBottom: 10,
    fontSize: 16
  },
  inputContainer: {
    position: 'relative'
  },
  input: {
    paddingLeft: 40,
    paddingRight: 20,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.blue,
    backgroundColor: colors.grey['450'],
    color: colors.text,
  },
  inputIcon: {
    width: 14,
    height: 14,
    position: 'absolute',
    top: 18,
    left: 20,
    zIndex: 2
  },
  smartContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    marginTop: 20,
  },
  smartContainerRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20
  },
  smartSearchInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    flex: 1
  },
  smartSearchInfoTitle: {
    color: colors.grey['400'],
    fontSize: 12
  },
  smartSearchInfoValue: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '600'
  }
})