import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import { Link } from "expo-router";
import { styled } from "nativewind";

export default function RestorantCard({
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
  const StyledPressable = styled(Pressable);

  return (
    <Link href={`/${id}`} className="bg-white mr-3 shadow" asChild>
      <StyledPressable className="active:opacity-50">
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
      </StyledPressable>
    </Link>
  );
}
