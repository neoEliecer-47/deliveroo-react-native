import { Stack } from "expo-router";
import { View } from "react-native";
import DeliverooProvider from "../context/DeliverooContext";

export default function Layout() {
  return (
    <DeliverooProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="[restaurantDetails]"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </DeliverooProvider>
  );
}
