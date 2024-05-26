import { View, Text, Pressable, Image, TextInput } from "react-native";
import * as React from "react";
import { useState, useContext, useRef } from "react";
import Styles from "../Styles";
import { validateEmail, validateFirstName } from "../utils/index.js";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { OnboardingCompleted } from "../utils/Contexts.js";

const Onboarding = () => {
  const styles = Styles;
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const emailRef = useRef();
  const firstNameRef = useRef();
  const [firstName, setFirstName] = useState("");
  const [firstNameValid, setFirstNameValid] = useState(false);
  const { setOnboardingCompleted } = useContext(OnboardingCompleted);
  const handleOnboarding = () => {
    storeData(email, firstName, true);
    getData();
    setOnboardingCompleted(true);
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={[styles.headerArea]}>
        <Image
          title="Logo"
          source={require("../assets/Logo.png")}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel={"Little Lemon Logo"}
        />
      </View>
      <View style={[styles.onboardingFormArea, styles.primaryBackgroundColor1]}>
        <Text style={[styles.sectionTitle, { padding: 20 }]}>
          Let us get to know you
        </Text>

        <Text style={[styles.leadText]}>First Name</Text>
        <TextInput
          style={styles.inputStyle}
          ref={firstNameRef}
          value={firstName}
          width={"80%"}
          onChangeText={(text) => {
            text = text.trim();
            setFirstName(text);
            console.log(text);
            setFirstNameValid(validateFirstName(text));
          }}
        />
        <Text style={[styles.leadText]}>Email</Text>
        <TextInput
          style={styles.inputStyle}
          width={"80%"}
          ref={emailRef}
          value={email}
          onChangeText={(text) => {
            text = text.trim();
            setEmail(text);
            setEmailValid(validateEmail(text));
          }}
        />
      </View>
      <View style={[styles.onboardingFooterArea]}>
        <Pressable
          title="Next"
          style={
            emailValid && firstNameValid
              ? [styles.buttonStyle1, styles.buttonStyle1Active]
              : [styles.buttonStyle1, styles.buttonStyle1Disabled]
          }
          disabled={!emailValid || !firstNameValid}
          onPress={() => {
            handleOnboarding();
          }}
        >
          <Text
            style={
              emailValid && firstNameValid
                ? [
                    styles.leadText,
                    styles.buttonStyle1Active,
                    { textAlign: "center" },
                  ]
                : [
                    styles.leadText,
                    styles.textDisabledColor,
                    { textAlign: "center" },
                  ]
            }
          >
            NEXT
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const storeData = async (email, firstName, OnboardingCompleted) => {
  try {
    console.log("Storing Data");
    console.log(email);
    console.log(firstName);
    await AsyncStorage.setItem("email", email);
    await AsyncStorage.setItem("firstName", firstName);
    await AsyncStorage.setItem(
      "isOnboardingCompleted",
      JSON.stringify(OnboardingCompleted)
    );
  } catch (e) {
    console.log(e);
  }
};

const getData = async () => {
  try {
    console.log("Getting Data");
    console.log(await AsyncStorage.getItem("email"));
    console.log(await AsyncStorage.getItem("firstName"));
    console.log(await AsyncStorage.getItem("isOnboardingCompleted"));
  } catch (e) {
    console.log(e);
  }
};

export default Onboarding;
