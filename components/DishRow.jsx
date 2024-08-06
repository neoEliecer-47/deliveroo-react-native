import { Image, Text, TouchableOpacity, View } from "react-native";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";

export default function DishRow({ name, description, price, image }) {
  // console.log(image)

  // let {
  //   asset: { _ref },
  // } = image;

  // console.log(_ref)
  // let dishImage = image.asset._ref
  // let dishImage2 = JSON.parse(image)
  // console.log({2: dishImage2})
  //console.log({i: image})
  return (
    <TouchableOpacity className='bg-white border p-4 border-gray-200'>
      <View className='flex-row '>
        <View className='flex-1 pr-2'>

        <Text className="text-lg mb-1">{name}</Text>
        <Text className="text-gray-500">{description}</Text>
        <Text className="text-gray-400 mt-2">
          <Currency quantity={price} currency="USD" />
        </Text>
        </View>
      
      <View>
        <Image
          style={{
            borderWidth: 1,
            borderColor: "#F3F3F4",
          }}
          source={{
            uri: urlFor(image).url(),
          }}
          className="w-20 h-20 bg-gray-300 p-4"
        />
      </View>
      </View>

    </TouchableOpacity>
  );
}
