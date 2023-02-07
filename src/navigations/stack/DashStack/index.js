import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Import all screens
//import DashScreen             from  "../../../screen/DashScreen";

const Stack = createStackNavigator();

const DashStackNavigator = () => {
  const screenOptionStyle = {
    headerShown: false
  };
  return (
    <Stack.Navigator screenOptions={ screenOptionStyle }>
      {/* <Stack.Screen name="Dash"   component={DashScreen}  /> */}
    </Stack.Navigator>
  );
}

export default DashStackNavigator;