import { Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../res';

export const styles = StyleSheet.create({
  component: {
    backgroundColor: colors.background,
    flex: 1,
  },
  wrapper: {
    width: '100%',
  },
  info: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  infoTitle: {
    fontSize: 24,
    color: colors.text,
    textAlign: 'center',
    width: '100%',
    fontWeight: '600',
    lineHeight: 40
  },
  infoDesc: {
    fontSize: 16,
    color: colors.grey['400'],
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 32,
    width: '100%',
    marginBottom: 60
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.blue,
    borderRadius: 15,
    minHeight: 40,
    padding: 22
  },
  iconButtonIcon: {
    width: 23,
    height: 20,
  },
  buttonWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.text,
    fontWeight: "600"
  },
  button: {
    width: '100%',
    backgroundColor: colors.blue,
    borderRadius: 15,
    minHeight: 40,
    padding: 22
  },
  anketButton: {
    backgroundColor: colors.blue,
    flex: 8,
    borderRadius: 15,
    minHeight: 40,
    padding: 22
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.text,
    fontWeight: "600"
  },
  question: {
    padding: 20
  },
  questionTitle: {
    fontSize: 14,
    color: colors.grey['400']
  },
  questionDesc: {
    fontSize: 18,
    color: colors.text,
    lineHeight: 28
  },
  quastions: {
    flexDirection: 'column',
    gap: 20,
    marginTop: 120,
    marginBottom: 60
  },
  stepperContainer: {
    marginBottom: 20
  },
  stepper: {
    flexDirection: 'row',
    gap: 10,
    width: '100%'
  },
  step: {
    flex: 1,
    height: 5,
    width: '100%',
    backgroundColor: colors.grey['400'],
    borderRadius: 100
  },
  stepFilled: {
    flex: 1,
    height: 5,
    width: '100%',
    backgroundColor: colors.blue,
    borderRadius: 100
  },
  radioButtonStroke: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: colors.grey['400'],
    width: 20,
    height: 20,
    position: 'relative'
  },
  radioButtonStrokeFilled: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: colors.light,
    width: 20,
    height: 20,
    position: 'relative'
  },
  radioButtonStrokeCircle: {
    width: 10,
    height: 10,
    position: 'relative',
    backgroundColor: colors.light,
    borderRadius: 100
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  radioButtonText: {
    color: colors.grey['400'],
    fontSize: 18
  },
  radioButtonTextFilled: {
    color: colors.text,
    fontSize: 18
  },
  buttons: {
    flexDirection: 'row',
    gap: 20
  },
  icon: {
    width: 50,
    height: 91
  }
})