import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import Currency from "react-currency-formatter";
import { Link, router, useNavigation, useRouter } from "expo-router";

export default function BasketIcon() {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const navigation = useNavigation();
  const router = useRouter();

  if(items.length === 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <Link href="/basketModalDetails" asChild>
        <Pressable className="bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1 justify-between">
          <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2 rounded-md">
            {items.length}
          </Text>
          <Text className="flex-1 text-white font-extrabold text-lg text-center">
            View Basket
          </Text>
          <Text className="text-white font-extrabold text-lg text-center bg-[#01A296] py-1 px-2 rounded-md">
            <Currency quantity={basketTotal} currency="USD" />
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
