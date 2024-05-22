import { StyleSheet } from "react-native";
import React from "react";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEFEE",
  },
  headerArea: {
    flex: 0.1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#EDEFEE",
  },
  onboardingFormArea: {
    flex: 0.75,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  onboardingFooterArea: {
    flex: 0.15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#EDEFEE",
  },
  primaryBackgroundColor1: {
    backgroundColor: "#495E57",
  },
  primaryBackgroundColor2: {
    backgroundColor: "#F4CE14",
  },
  buttonStyle1: {
    borderRadius: 16,
    alignItems: "center",
    alignContent: "center",
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "#333333",
  },
  buttonStyle1Active: {
    backgroundColor: "#F4CE14",
    color: "#333333",
  },
  buttonStyle1Clicked: {
    backgroundColor: "#EE9972",
    color: "#EDEFEE",
  },
  buttonStyle1Disabled: {
    backgroundColor: "#EDEFEE",
    color: "#333333",
  },
  textDisabledColor: { color: "#999999" },
  inputStyle: {
    borderRadius: 16,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#EDEFEE",
  },
  displayTitle: {
    //fontFamily: "MarkaziText', serif",
    fontSize: 64,
    fontWeight: "medium",
  },
  subtitle: {
    //fontFamily: "MarkaziText', serif",
    fontSize: 40,
    fontWeight: "regular",
  },
  leadText: {
    //fontFamily: "karla', sans-serif",
    fontSize: 18,
    fontWeight: "medium",
  },
  sectionTitle: {
    //fontFamily: "karla', sans-serif",
    fontSize: 20,
    fontWeight: "extrabold",
  },
  sectionCategory: {
    //fontFamily: "karla', sans-serif",
    fontSize: 16,
    fontWeight: "extrabold",
  },
  cardTitle: {
    //fontFamily: "karla', sans-serif",
    fontSize: 18,
    fontWeight: "bold",
  },
  paragraphText: {
    //fontFamily: "karla', sans-serif",
    fontSize: 16,
    fontWeight: "regular",
  },
  highlightText: {
    //fontFamily: "karla', sans-serif",
    fontSize: 16,
    fontWeight: "medium",
  },
  navArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 50,
    padding: 10,
  },
});

export default Styles;
