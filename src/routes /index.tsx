import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Details from '../pages/Details.tsx/Details';


const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="events">
        <Stack.Screen name="login" options={{ headerShown: false }} component={Login} />
         <Stack.Screen name="events" options={{ title: 'Eventos', headerBackVisible: false}}  component={Home} />
         <Stack.Screen name="details" options={{ title: 'Detalhes do evento', headerBackTitle:'', }}  component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
