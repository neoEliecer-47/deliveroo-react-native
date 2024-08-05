import { Stack } from "expo-router";
import { View } from "react-native";
import DeliverooProvider from "../context/DeliverooContext";

export default function Layout() {
  return (
    <DeliverooProvider>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen
          name="[restaurantDetails]"
          options={{
            headerShown: true,
          }}
        />
      </Stack>
    </DeliverooProvider>
  );
}
