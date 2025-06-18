import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Home from '../pages/Home';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';

const Stack = createNativeStackNavigator();


export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Eventos">
        <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Eventos" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
