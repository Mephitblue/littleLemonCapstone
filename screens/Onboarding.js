import { View, Text, Pressable, Image, TextInput } from "react-native";
import React from "react";
import { useState, useRef } from "react";
import Styles from "../Styles";
import { validateEmail, validateFirstName } from "../utils/index.js";

const styles = Styles;

const Onboarding = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const emailRef = useRef();
  const firstNameRef = useRef();
  const [firstName, setFirstName] = useState("");
  const [firstNameValid, setFirstNameValid] = useState(false);
  return (
    <View style={[styles.container, styles.primaryBackgroundColor1]}>
      <Image
        title="Logo"
        source={require("../assets/images/logo.png")}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />

      <Text style={[styles.leadText]}>Let us get to know you know</Text>
      <View>
        <Text style={[styles.leadText]}>First Name</Text>
        <TextInput
          style={styles.inputStyle}
          width={200}
          ref={firstNameRef}
          value={firstName}
          onChangeText={(text) => {
            setFirstName(text);
            setFirstNameValid(validateFirstName(text));
          }}
        />
        <Text style={[styles.leadText]}>Email</Text>
        <TextInput
          style={styles.inputStyle}
          width={200}
          ref={emailRef}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setEmailValid(validateEmail(text));
          }}
        />
      </View>
      <View>
        <Pressable
          title="Next"
          style={
            emailValid && firstNameValid
              ? [styles.buttonStyle1, styles.buttonStyle1Active]
              : [styles.buttonStyle1, styles.buttonStyle1Disabled]
          }
          disabled={!emailValid || !firstNameValid}
          onPress={() => console.log("Next button clicked")}
        >
          <Text style={[styles.leadText]}>NEXT</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Onboarding;
