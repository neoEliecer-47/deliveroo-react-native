import { View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
//import DeliverooProvider from "../context/DeliverooContext";

export default function Index() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}
