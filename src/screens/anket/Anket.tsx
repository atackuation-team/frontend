import { View, Text, Pressable } from 'react-native';
import { FC, useState } from 'react';
import { styles } from './styles';
import { Image } from 'expo-image';
import SyncStorage from 'sync-storage';

// @ts-ignore
import back from '../../res/images/icons/back.svg'
// @ts-ignore
import success from '../../res/images/icons/success.svg'
import { useLinkTo } from '@react-navigation/native';

const RadioButton: FC<{ onPress: (value: number | null) => void, currentValue: number | null, value: number | null, text: string }> = ({ onPress, value, currentValue, text }) => (
  <Pressable onPress={() => onPress(value)} style={styles.radioButton}>
    <View style={value === currentValue ? styles.radioButtonStrokeFilled : styles.radioButtonStroke}>
      {value === currentValue && <View style={styles.radioButtonStrokeCircle}></View>}
    </View>
    <Text style={value === currentValue ? styles.radioButtonTextFilled : styles.radioButtonText}>
      {text}
    </Text>
  </Pressable>
)

export const AnketScreen: FC = () => {
  const [step, setStep] = useState(0)
  const linkTo = useLinkTo()

  const [stepOneValue, setStepOneValue] = useState<null | number>(null)
  const [stepTwoValue, setStepTwoValue] = useState<null | number>(null)
  const [stepThreeValue, setStepThreeValue] = useState<null | number>(null)
  const [stepFourValue, setStepFourValue] = useState<null | number>(null)
  const [stepFiveValue, setStepFiveValue] = useState<null | number>(null)
  const [stepSixValue, setStepSixValue] = useState<null | number>(null)
  const [stepSevenValue, setStepSevenValue] = useState<null | number>(null)

  return (
    <View style={styles.component}>
      {step === 0 && (
        <View style={styles.info}>
          <Text style={styles.infoTitle}>Пройдите короткий опрос для настройки Ai dashboard</Text>
          <Text style={styles.infoDesc}>Чтобы мы знали ваши предпочтения и предлагали идеальные варианты для вас </Text>
          <View>
            <Pressable onPress={() => setStep(1)} style={styles.button}>
              <View style={styles.buttonWrapper}>
                <Text style={styles.buttonText}>Начать опрос</Text>
              </View>
            </Pressable>
          </View>
        </View>
      )}
      {step === 1 && (
        <View style={styles.question}>
          <View style={styles.stepperContainer}>
            <View style={styles.stepper}>
              <View style={styles.stepFilled}></View>
              <View style={styles.step}></View>
              <View style={styles.step}></View>
              <View style={styles.step}></View>
              <View style={styles.step}></View>
              <View style={styles.step}></View>
              <View style={styles.step}></View>
            </View>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.questionTitle}>Вопрос 1</Text>
            <Text style={styles.questionDesc}>Как частво вы посещаете банкоматы?</Text>
            <View style={styles.quastions}>
              <RadioButton onPress={setStepOneValue} value={0} currentValue={stepOneValue} text='Раз в неделю' />
              <RadioButton onPress={setStepOneValue} value={1} currentValue={stepOneValue} text='Раз в месяц' />
              <RadioButton onPress={setStepOneValue} value={2} currentValue={stepOneValue} text='Раз в две недели' />
              <RadioButton onPress={setStepOneValue} value={3} currentValue={stepOneValue} text='Реже чем раз в месяц' />
            </View>
            <View style={styles.buttons}>
              <Pressable onPress={() => setStep(0)} style={styles.iconButton}>
                <Image source={back} style={styles.iconButtonIcon} />
              </Pressable>
              <Pressable onPress={() => setStep(2)} style={styles.anketButton}>
                <View style={styles.buttonWrapper}>
                  <Text style={styles.buttonText}>Далее</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      )}
      {step === 2 && (
        <View style={styles.question}>
          <View style={styles.stepperContainer}>
            <View style={styles.stepper}>
              <View style={styles.stepFilled}></View>
              <View style={styles.stepFilled}></View>
              <View style={styles.step}></View>
              <View style={styles.step}></View>
              <View style={styles.step}></View>
              <View style={styles.step}></View>
              <View style={styles.step}></View>
            </View>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.questionTitle}>Вопрос 2</Text>
            <Text style={styles.questionDesc}>Для каких основных операций вы используете банкоматы?</Text>
            <View style={styles.quastions}>
              <RadioButton onPress={setStepTwoValue} value={0} currentValue={stepTwoValue} text='Снятие наличных' />
              <RadioButton onPress={setStepTwoValue} value={1} currentValue={stepTwoValue} text='Переводы на другие счета' />
              <RadioButton onPress={setStepTwoValue} value={2} currentValue={stepTwoValue} text='Оплата счетов и услуг' />
              <RadioButton onPress={setStepTwoValue} value={3} currentValue={stepTwoValue} text='Другое' />
            </View>
            <View style={styles.buttons}>
              <Pressable onPress={() => setStep(1)} style={styles.iconButton}>
                <Image source={back} style={styles.iconButtonIcon} />
              </Pressable>
              <Pressable onPress={() => setStep(3)} style={styles.anketButton}>
                <View style={styles.buttonWrapper}>
                  <Text style={styles.buttonText}>Далее</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      )}
      {step === 3 && (
        <View style={styles.question}>
          <View style={styles.stepperContainer}>
            <View style={styles.stepper}>
              <View style={styles.stepFilled}></View>
              <View style={styles.stepFilled}></View>
              <View style={styles.stepFilled}></View>
              <View style={styles.step}></View>
              <View style={styles.step}></View>
              <View style={styles.step}></View>
              <View style={styles.step}></View>
            </View>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.questionTitle}>Вопрос 3</Text>
            <Text style={styles.questionDesc}>В какое время суток вам удобнее всего использовать банкоматы?</Text>
            <View style={styles.quastions}>
              <RadioButton onPress={setStepThreeValue} value={0} currentValue={stepThreeValue} text='Утро (6:00 - 12:00)' />
              <RadioButton onPress={setStepThreeValue} value={1} currentValue={stepThreeValue} text='День (12:00 - 18:00)' />
              <RadioButton onPress={setStepThreeValue} value={2} currentValue={stepThreeValue} text='Вечер (18:00 - 00:00)' />
              <RadioButton onPress={setStepThreeValue} value={3} currentValue={stepThreeValue} text='Ночь (00:00 - 6:00)' />
            </View>
            <View style={styles.buttons}>
              <Pressable onPress={() => setStep(2)} style={styles.iconButton}>
                <Image source={back} style={styles.iconButtonIcon} />
              </Pressable>
              <Pressable onPress={() => setStep(4)} style={styles.anketButton}>
                <View style={styles.buttonWrapper}>
                  <Text style={styles.buttonText}>Далее</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      )}
      {step === 4 && (
        <View style={styles.question}>
          <View style={styles.stepperContainer}>
            <View style={styles.stepper}>
              <View style={styles.stepFilled}></View>
              <View style={styles.stepFilled}></View>
              <View style={styles.stepFilled}></View>
              <View style={styles.stepFilled}></View>
              <View style={styles.step}></View>
              <View style={styles.step}></View>
              <View style={styles.step}></View>
            </View>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.questionTitle}>Вопрос 4</Text>
            <Text style={styles.questionDesc}>Какие факторы для вас наиболее важны при выборе банкомата?</Text>
            <View style={styles.quastions}>
              <RadioButton onPress={setStepFourValue} value={0} currentValue={stepFourValue} text='Близость к дому/работе' />
              <RadioButton onPress={setStepFourValue} value={1} currentValue={stepFourValue} text='Минимальная очередь' />
              <RadioButton onPress={setStepFourValue} value={2} currentValue={stepFourValue} text='Наличие нужных функций' />
              <RadioButton onPress={setStepFourValue} value={3} currentValue={stepFourValue} text='Безопасность района' />
              <RadioButton onPress={setStepFourValue} value={4} currentValue={stepFourValue} text='Наличие акций и бонусов' />
            </View>
            <View style={styles.buttons}>
              <Pressable onPress={() => setStep(3)} style={styles.iconButton}>
                <Image source={back} style={styles.iconButtonIcon} />
              </Pressable>
              <Pressable onPress={() => setStep(5)} style={styles.anketButton}>
                <View style={styles.buttonWrapper}>
                  <Text style={styles.buttonText}>Далее</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      )}
      {step === 5 && (
        <View style={styles.question}>
          <View style={styles.stepperContainer}>
            <View style={styles.stepper}>
              <View style={styles.stepFilled}></View>
              <View style={styles.stepFilled}></View>
              <View style={styles.stepFilled}></View>
              <View style={styles.stepFilled}></View>
              <View style={styles.stepFilled}></View>
              <View style={styles.step}></View>
              <View style={styles.step}></View>
            </View>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.questionTitle}>Вопрос 5</Text>
            <Text style={styles.questionDesc}>Используете ли вы какие-либо средства общественного транспорта для посещения банкомата?</Text>
            <View style={styles.quastions}>
              <RadioButton onPress={setStepFiveValue} value={0} currentValue={stepFiveValue} text='Да, автобус' />
              <RadioButton onPress={setStepFiveValue} value={1} currentValue={stepFiveValue} text='Да, метро' />
              <RadioButton onPress={setStepFiveValue} value={2} currentValue={stepFiveValue} text='Да, такси или каршеринг' />
              <RadioButton onPress={setStepFiveValue} value={3} currentValue={stepFiveValue} text='Нет, хожу пешком или езжу на своем транспорте' />
            </View>
            <View style={styles.buttons}>
              <Pressable onPress={() => setStep(4)} style={styles.iconButton}>
                <Image source={back} style={styles.iconButtonIcon} />
              </Pressable>
              <Pressable onPress={() => setStep(6)} style={styles.anketButton}>
                <View style={styles.buttonWrapper}>
                  <Text style={styles.buttonText}>Далее</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      )}
      {step === 6 && (
        <View style={styles.question}>
          <View style={styles.stepperContainer}>
            <View style={styles.stepper}>
              <View style={styles.stepFilled}></View>
              <View style={styles.stepFilled}></View>
              <View style={styles.stepFilled}></View>
              <View style={styles.stepFilled}></View>
              <View style={styles.stepFilled}></View>
              <View style={styles.stepFilled}></View>
              <View style={styles.step}></View>
            </View>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.questionTitle}>Вопрос 6</Text>
            <Text style={styles.questionDesc}>У вас есть какие-либо ограниченные возможности, которые банк должен учитывать?</Text>
            <View style={styles.quastions}>
              <RadioButton onPress={setStepSixValue} value={0} currentValue={stepSixValue} text='Да, ограниченная мобильность' />
              <RadioButton onPress={setStepSixValue} value={1} currentValue={stepSixValue} text='Да, проблемы со зрением' />
              <RadioButton onPress={setStepSixValue} value={2} currentValue={stepSixValue} text='Да, проблемы со слухом' />
              <RadioButton onPress={setStepSixValue} value={3} currentValue={stepSixValue} text='Нет' />
            </View>
            <View style={styles.buttons}>
              <Pressable onPress={() => setStep(5)} style={styles.iconButton}>
                <Image source={back} style={styles.iconButtonIcon} />
              </Pressable>
              <Pressable onPress={() => setStep(7)} style={styles.anketButton}>
                <View style={styles.buttonWrapper}>
                  <Text style={styles.buttonText}>Далее</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      )}
      {step === 7 && (
        <View style={styles.question}>
          <View style={styles.stepperContainer}>
            <View style={styles.stepper}>
              <View style={styles.stepFilled}></View>
              <View style={styles.stepFilled}></View>
              <View style={styles.stepFilled}></View>
              <View style={styles.stepFilled}></View>
              <View style={styles.stepFilled}></View>
              <View style={styles.stepFilled}></View>
              <View style={styles.stepFilled}></View>
            </View>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.questionTitle}>Вопрос 7</Text>
            <Text style={styles.questionDesc}>Предпочитаете ли вы использовать банкоматы в определенных местах (например, в торговых центрах, на работе)?</Text>
            <View style={styles.quastions}>
              <RadioButton onPress={setStepSevenValue} value={0} currentValue={stepSevenValue} text='Да, в торговых центрах' />
              <RadioButton onPress={setStepSevenValue} value={1} currentValue={stepSevenValue} text='Да, проблемы со зрением' />
              <RadioButton onPress={setStepSevenValue} value={2} currentValue={stepSevenValue} text='Да, проблемы со слухом' />
              <RadioButton onPress={setStepSevenValue} value={3} currentValue={stepSevenValue} text='Нет' />
            </View>
            <View style={styles.buttons}>
              <Pressable onPress={() => setStep(6)} style={styles.iconButton}>
                <Image source={back} style={styles.iconButtonIcon} />
              </Pressable>
              <Pressable onPress={() => setStep(8)} style={styles.anketButton}>
                <View style={styles.buttonWrapper}>
                  <Text style={styles.buttonText}>Далее</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      )}
      {step === 8 && (
        <View style={styles.info}>
          <Image style={styles.icon} source={success} />
          <Text style={styles.infoTitle}>Всё готово!</Text>
          <Text style={styles.infoDesc}>Банкоматы и отделения подобраны, они будут помечаны так</Text>
          <View>
            <Pressable onPress={() => {
              linkTo('/Home')
              SyncStorage.set('test', 'complete');
            }} style={styles.button}>
              <View style={styles.buttonWrapper}>
                <Text style={styles.buttonText}>Главная</Text>
              </View>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  )
}