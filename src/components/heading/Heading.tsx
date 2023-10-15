import { FC, PropsWithChildren } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

export const Heading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Text style={styles.text}>{children}</Text>
  )
}