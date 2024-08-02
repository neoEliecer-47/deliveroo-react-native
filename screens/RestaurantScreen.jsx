import { Text, View, ScrollView, Image } from "react-native";
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
        <View>
            <Image 
              source={{
                uri: urlFor(img).url()
              }}
              className='w-12 h-12'
            />
        </View>
    </ScrollView>
  )
}

