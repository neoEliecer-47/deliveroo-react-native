import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { urlFor } from "../sanity";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "expo-router";
import { StarIcon } from "react-native-heroicons/solid";
import {
  MapPinIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";

export default function RestaurantScreen({
  id,
  img,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) {
  const navigation = useNavigation();
  console.log(genre);
  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: urlFor(img).url(),
          }}
          className="w-full h-56 bg-gray-300 p-2"
        />
        <TouchableOpacity
          className="absolute top-10 left-1 bg-white rounded-full p-1 w-10 ml-2"
          onPress={navigation.goBack}
        >
          <ChevronLeftIcon size={30} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="px-4 p-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-2">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-green-500 text-md">● {rating}</Text>
            </View>

            <View className="flex-row items-center space-x-2">
              <MapPinIcon color="gray" opacity={0.4} size={22} />
              <Text className="text-xs text-gray-500">Nearby ● {address}</Text>
            </View>
          </View>

          <Text className="text-gray-500 mt-2">{short_description}</Text>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
          <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
          <Text className="pl-2 flex-1 text-md font-bold">
            Have a food allergy?
          </Text>
          <ChevronRightIcon color="#00CCBB" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
