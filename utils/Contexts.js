import { createContext, useContext, useState } from "react";
export const OnboardingCompleted = createContext({
  isOnboardingCompleted: false,
  setOnboardingCompleted: () => {},
});
