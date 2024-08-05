import { Text, TouchableOpacity, View } from "react-native"
import Currency from 'react-currency-formatter'


export default function DishRow({ name, short_description }) {
 
  return (
    <TouchableOpacity>
        <View>
            <Text className='text-lg mb-1'>{name}</Text>
            <Text className='text-gray-400'>{short_description}</Text>
            {/* <Text className='text-gray-400 mt-2'>
                <Currency quantity={price} currency="USD" />
            </Text> */}
        </View>
    </TouchableOpacity>
  )
}
