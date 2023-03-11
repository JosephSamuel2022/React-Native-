import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './Home'
import LoginScreen from './LoginForm'
import RegisterScreen from './Register'
import HealthCareScreen from './HealthCare';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen name="LoginForm" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="HealthCare" component={HealthCareScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;