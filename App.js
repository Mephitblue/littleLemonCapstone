import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Onboarding from "./screens/Onboarding";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import SplashScreen from "./screens/SplashScreen";
import { OnboardingCompleted } from "./utils/Contexts";

import {
  useFonts,
  Karla_400Regular,
  Karla_500Medium,
  Karla_700Bold,
  Karla_800ExtraBold,
} from "@expo-google-fonts/karla";

import {
  MarkaziText_400Regular,
  MarkaziText_500Medium,
} from "@expo-google-fonts/markazi-text";

const Stack = createNativeStackNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_500Medium,
    Karla_700Bold,
    Karla_800ExtraBold,
    MarkaziText_400Regular,
    MarkaziText_500Medium,
  });

  /*   const [state, setState] = useState({
    isLoggedIn: false,
    isLoading: true,
    isOnboardingCompleted: false,
  }); */
  //const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const onboardingCompleted = useContext(OnboardingCompleted);

  const checkIfOnboardingCompleted = async () => {
    //const [isOnboardingCompleted, setOnboardingCompleted] = useState(false);
    setIsLoading(false);
    try {
      console.log("Checking if Onboarding is completed");
      const value = await AsyncStorage.getItem("isOnboardingCompleted");
      console.log("Is Onboarding Value: ", JSON.parse(value));
      if (value !== null) {
        console.log("In if value not null statement");
        setOnboardingCompleted(JSON.parse(value));
        console.log("Is Onboarding Completed: ", onboardingCompleted);
        setIsLoading(false);
      } else {
        //setOnboardingCompleted(false);
        setIsLoading(false);

        /*         setState({
          ...state,
          isOnboardingCompleted: false,
          isLoading: false,
        }); */
      }
    } catch (e) {
      setIsLoading(false);
      setIsLoggedIn(false);
    }
  };
  useEffect(() => {
    checkIfOnboardingCompleted();
    //console.log(isOnboardingCompleted);
  }, []);

  if (isLoading || !fontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <OnboardingCompleted.Provider value={{ setOnboardingCompleted: () => {} }}>
      <NavigationContainer>
        <Stack.Navigator>
          {!OnboardingCompleted ? (
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
              component={Onboarding}
              options={{
                headerShown: false,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </OnboardingCompleted.Provider>
  );
}
