import { Image, Text, TouchableOpacity, View } from "react-native";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBasketItems,
  addToBasket,
  selectBasketItemsWithId,
  removeFromBasket,
} from "../features/basketSlice";

export default function DishRow({ name, description, price, image, id }) {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  function addItemToBasket() {
    dispatch(addToBasket({ id, name, description, price, image }));
  }

  function removeItemFromBasket() {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id }));
  }

  return (
    <>
      <TouchableOpacity
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0`"
        }`}
        onPress={() => setIsPressed(!isPressed)}
      >
        <View className="flex-row ">
          <View className="flex-1 pr-2">
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

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity onPress={removeItemFromBasket}>
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
