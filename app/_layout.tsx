import { Stack } from "expo-router";
import "./globals.css";
import { Platform, StatusBar } from "react-native";
import * as NavigationBar from 'expo-navigation-bar';

if(Platform.OS == 'android'){
	NavigationBar.setVisibilityAsync('hidden')
}

export default function RootLayout() {
  return <>
    <StatusBar hidden={true}/>
    <Stack>
      
      <Stack.Screen
        name="(tabs)/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="idea/[id]"
        options={{ headerShown: false }}
      />
    </Stack>
  </>
  ;
}
