import { StyleSheet } from 'react-native'
import { colors } from '../../res';
import { Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  component: {
    backgroundColor: colors.background,
    flex: 1,
  },
  map: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  bottomSheet: {
    backgroundColor: colors.background,
    borderRadius: 30
  },
  bottomSheetHandle: {
    backgroundColor: colors.blue,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  bottomSheetHandleIndicator: {
    height: 5,
    width: '30%',
    backgroundColor: colors.background
  },
  bottomSheetTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
    paddingTop: 30,
    paddingBottom: 30 + 40,
    borderRadius: 0,
    position: 'relative',
    top: -1,
  },
  bottomSheetLine: {
    backgroundColor: colors.background,
    width: '100%',
    height: 40,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    position: 'absolute',
    bottom: -1
  },
  bottomSheetTitleText: {
    fontSize: 32,
    fontWeight: "600",
    color: colors.text,
  },
  bottomSheetTitleDesc: {
    fontSize: 16,
    color: colors.text,
  },
  bottomSheetContent: {
    width: '100%',
    borderBottomEndRadius: 0,
    backgroundColor: colors.background
  },
  bottomSheetContainer: {
    paddingHorizontal: 60,
    paddingVertical: 30,
  },
  bottomSheetContainerTitle: {
    fontSize: 20,
    color: colors.text,
    fontWeight: "600",
    marginBottom: 20
  },
  bottomSheetTitleT: {
    fontSize: 14,
    color: colors.text,
    fontWeight: "600",
    marginTop: 20
  },
  bottomSheetTitleW: {
    fontSize: 14,
    color: colors.blue,
    fontWeight: "600",
    marginTop: 20
  },
  bottomSheetContainerInfoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  bottomSheetContainerInfo: {
    display: 'flex',
    flexDirection: 'row',
    gap: 50,
    alignItems: 'center'
  },
  bottomSheetContainerIcon: {
    width: 20,
    height: 25,
  },
  bottomSheetContainerTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  bottomSheetContainerTextWrapperTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text
  },
  bottomSheetContainerTextWrapperDesc: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.grey['400']
  },
  radioButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  radioButton: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    flexGrow: 0,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.blue
  },
  radioButtonSelected: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    backgroundColor: colors.blue,
    flexGrow: 0,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.blue
  },
  radioButtonText: {
    color: colors.blue,
    fontWeight: '600'
  },
  radioButtonTextSelected: {
    color: colors.text,
    fontWeight: '600'
  },
  radioButtonIcon: {
    width: 10,
    height: 14,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
    borderRadius: 15,
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '600'
  },
  stepper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
  },
  step: {
    height: 12,
    width: 6,
    borderRadius: 100,
    backgroundColor: '#3B404A'
  },
  stepFilled: {
    height: 12,
    width: 6,
    borderRadius: 100,
    backgroundColor: colors.blue
  },
  stepperContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  }
})