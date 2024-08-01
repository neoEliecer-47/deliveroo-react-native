import { useLayoutEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  // useLayoutEffect(()=>{
  //   navigation.setOptions({
  //     headerTitle: 'testing'
  //   })
  // }, [])

  const insets = useSafeAreaInsets();
  const img = "https://links.papareact.com/wru";

  return (
    <View
      style={{ paddingBottom: insets.bottom, paddingTop: insets.top }}
      className="bg-gray-200 pt-5 flex-auto"
    >

        {/* header */}

        <View className="flex-row pb-3 px-4 items-center justify-between">
          <Image
            source={{ uri: img }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={30} color={"#00CCBB"} className="" />
        </View>
        {/* search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 items-center justify-center">
            <MagnifyingGlassIcon color={"gray"} size={20} />
            <TextInput
              placeholder="Restorants and cuisines"
              inputMode="search"
              className=""
            />
          </View>
          <AdjustmentsVerticalIcon color={"#00CCBB"} />
        </View>

        {/* Body */}
        <ScrollView>
          {/* Categories component */}
          <Categories />
          {/* featured rows */}
          <FeaturedRow 
            title='Featured'
            description='paid placements from our partners'
            id='1'
          />
           {/* tasty discounts */}
           <FeaturedRow 
            title='Featured'
            description='paid placements from our partners'
            id='2'
          />
           {/* offers near u */}
           <FeaturedRow 
            title='Featured'
            description='paid placements from our partners'
            id='3'
          />
        </ScrollView>
 
    </View>
  );
};

export default HomeScreen;


