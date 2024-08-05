import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import { Link, router } from "expo-router";
import { styled } from "nativewind";
import { useDeliverooContext } from "../context/DeliverooContext";
import { useEffect } from "react";

export default function RestorantCard({
  title,
  rating,
  genre,
  address,
  img,
  short_description,
}) {
  let image = img.asset._ref;
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/[restaurantDetails]",
          params: {
            title,
            rating,
            genre,
            address,
            image,
            short_description,
          },
        })
      }
    >
      <Image
        source={{
          uri: urlFor(img).url(),
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="ml-2 mb-2">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-md text-gray-500">
            <Text className="text-green-500">{rating}</Text> ● {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby ● {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
