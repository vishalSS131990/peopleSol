import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Import all screens
import LoginScreen    from  "../../../screen/Login";

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  const screenOptionStyle = {
    headerShown: false
  };
  return (
    <Stack.Navigator screenOptions={ screenOptionStyle }>
      <Stack.Screen name="Login" component={LoginScreen}  />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;