import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { AIScreen, HomeScreen, DashboardScreen } from './src/screens';
import { AnketScreen } from './src/screens/anket/Anket';
import { AppBar } from './src/components';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { AppBarWithTitle } from './src/components/appBarWithTitle';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
              <Stack.Screen name="Home" component={HomeScreen} options={{ header: () => <AppBar /> }} />
              <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ header: () => <AppBarWithTitle title='Отделение' /> }} />
              <Stack.Screen name="AI" component={AIScreen} options={{ header: () => <AppBarWithTitle title='AI Dashboard' /> }} />
              <Stack.Screen name="Anket" component={AnketScreen} options={{ header: () => <AppBarWithTitle title='Анкета' /> }} />
            </Stack.Navigator>
          </NavigationContainer>
          <StatusBar style='auto' />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
