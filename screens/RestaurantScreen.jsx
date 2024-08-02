import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { urlFor } from "../sanity";



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
    lat }){
  return (
    <ScrollView>
        <View className='relative'>
            <Image 
              source={{
                uri: urlFor(img).url()
              }}
              className='w-full h-56 bg-gray-300 p-2'
            />
            <TouchableOpacity />
        </View>
    </ScrollView>
  )
}

