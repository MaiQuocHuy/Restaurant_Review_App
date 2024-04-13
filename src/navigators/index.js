import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ForgotPasswordScreen,
  HomeScreen,
  SignInScreen,
  SignUpScreen,
  SplashScreen,
} from '../screens';
import BottomTabs from './BottomTabs';
import RestaurantScreen from '../screens/RestaurantScreen';

const Stack = createStackNavigator();
const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Signin" component={SignInScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="Forgot" component={ForgotPasswordScreen} />
        <Stack.Screen name="HomeTabs" component={BottomTabs} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
