import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import DishRow from "../components/DishRow.jsx";
import BasketIcon from "../components/BasketIcon.jsx";

export default function RestaurantDetails() {
  const navigation = useNavigation();

  const { title, rating, genre, address, image, short_description, dishes } =
    useLocalSearchParams();

  const menuDishes = JSON.parse(dishes);
  //console.log(JSON.parse(dishes))
  //console.log({ i: menuDishes });
  return (
    <>
    <BasketIcon />
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: urlFor(image).url(),
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
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500 text-md">{rating}</Text> ●{" "}
                {genre}
              </Text>
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
      <View className='pb-28'>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
        {/* dishrows */}
        {menuDishes?.map(({ _id, name, short_description, price, image }) => {
          let img = image.asset._ref;
          return (
            <DishRow
              key={_id}
              id={_id}
              name={name}
              description={short_description}
              price={price}
              image={img}
            />
          );
        })}
        
      </View>
    </ScrollView>
    </>
  );
}
