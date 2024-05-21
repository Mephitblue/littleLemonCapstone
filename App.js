import * as React from "react";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Onboarding from "./screens/Onboarding";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import SplashScreen from "./screens/SplashScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  const [state, setState] = useState({
    isLoggedIn: false,
    isLoading: true,
    isOnboardingCompleted: false,
  });

  const checkIfOnboardingCompleted = async () => {
    try {
      const value = await AsyncStorage.getItem("isOnboardingCompleted");
      if (value !== null) {
        setState({
          ...state,
          isOnboardingCompleted: JSON.parse(value),
          isLoading: false,
        });
      } else {
        setState({
          ...state,
          isOnboardingCompleted: false,
          isLoading: false,
        });
      }
    } catch (e) {
      setState({
        ...state,
        isLoggedIn: false,
        isLoading: false,
      });
    }
  };
  useEffect(() => {
    checkIfOnboardingCompleted();
  }, []);

  if (state.isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!state.isOnboardingCompleted ? (
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
