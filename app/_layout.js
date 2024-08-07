import { Slot, Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../store";
import { JsStack } from "../features/JsStack";
import { TransitionPresets } from "@react-navigation/stack";

export default function Layout() {
  return (
    <Provider store={store}>
      <JsStack>
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
        <JsStack.Screen
          name="basketModalDetails"
          options={{
            ...TransitionPresets.ModalPresentationIOS,
            presentation: "modal",
            gestureEnabled: true,
            headerShown: false
          }}
        />
      </JsStack>
    </Provider>
  );
}
