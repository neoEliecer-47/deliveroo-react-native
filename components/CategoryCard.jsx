import { Image, Text, TouchableOpacity } from "react-native";

export default function CategoryCard({ img, title }) {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: img,
        }}
        className="w-20 h-20 rounded-md"
      />
      <Text className='absolute bottom-1 left-1 text-white font-bold'>{title}</Text>
    </TouchableOpacity>
  );
}
