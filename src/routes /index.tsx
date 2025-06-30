import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Details from "../pages/Details.tsx/Details";
import { theme } from "../styles/theme";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="events"
        screenOptions={{
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontSize: theme.fontSizes.headerTitle,
            color: theme.colors.default,
          },
        }}
      >
        <Stack.Screen
          name="login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name="events"
          options={{ title: "Eventos" }}
          component={Home}
        />
        <Stack.Screen
          name="details"
          options={({ navigation }) => ({
            title: "Detalhes do evento",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 10, marginRight: 10 }}
              >
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color={theme.colors.default}
                />
              </TouchableOpacity>
            ),
          })}
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
