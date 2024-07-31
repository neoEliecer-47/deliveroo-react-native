import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'


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
    
  return (
    <TouchableOpacity >
      <Image 
        source={{
            uri: img
        }}
        className='h-36 w-64 rounded-sm'
      />
      <View>
        <Text className='font-bold text-lg pt-2'>{title}</Text>
        <View className='flex-row items-center space-x-1'>
            <StarIcon color='green' opacity={0.5} size={22}/>
            <Text className='text-xs text-gray-500'> 
                <Text className='text-green-500'>{rating}</Text> ● {genre}
            </Text>
        </View>

        <View>
        <MapPinIcon color='gray' opacity={0.4} size={22}/>
        <Text>Nearby ● {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
