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
  heading: {
    color: colors.light,
    fontSize: 24,
    fontWeight: "600",
    paddingBottom: 20,
  },
  statisticsWrapper: {
    marginBottom: 40
  },
  cardsList: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    flexGrow: 0,
    paddingHorizontal: 20,
    marginVertical: 25
  },
  operationList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    flexGrow: 0,
    paddingBottom: 20,
    marginVertical: 25,
    height: 900
  },
  card: {
    width: Dimensions.get('window').width * 0.7,
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
  operationCard: {
    backgroundColor: colors.grey['600'],
    padding: 16,
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.grey['500'],
    minWidth: 320
  },
  operationCardHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20
  },
  operationCardHeaderText: {
    fontSize: 14,
    color: colors.text,
  },
  operationCardImageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
    width: 20,
    height: 20,
    borderRadius: 100,
    aspectRatio: 1
  },
  operationCardImage: {
    width: 10,
    height: 10
  },
  operationCardDesc: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "600",
  },
  operationCardFooter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginTop: 30
  },
  operationCardFooterInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  operationCardFooterInfoIcon: {
    width: 10,
    height: 10,
  },
  operationCardFooterInfoText: {
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
  },
  bottomSheetContainerInfoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  bottomSheetContainerInfo: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center'
  },
  bottomSheetContainerIcon: {
    width: 10,
    height: 10,
  },
  bottomSheetContainerTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  bottomSheetContainerTextWrapperTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text
  },
  bottomSheetContainerTextWrapperDesc: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.grey['400']
  },
})