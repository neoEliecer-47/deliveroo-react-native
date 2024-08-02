import { Image, Text, TouchableOpacity } from "react-native";
import { urlFor } from "../sanity";

export default function CategoryCard({ img, title, _id }) {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: urlFor(img).url(),
        }}
        className="w-20 h-20 rounded-md"
      />
      <Text className='absolute bottom-1 left-1 text-white font-bold drop-shadow-[0_35px_35px_rgba(0,0,0,0)]'>{title}</Text>
    </TouchableOpacity>
  );
}
