import { ScrollView, Text, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestorantCard from "./RestorantCard";
import { useEffect, useState } from "react";
import sanityClient from "../sanity";

export default function FeaturedRow({ title, description, id }) {
  const [restaurants, setRestaurants] = useState([]);
  
  useEffect(() => {
    sanityClient
      .fetch(
        `
      
      *[_type == "featured" && _id == $id] {
          ...,
        restaurants[]->{
          ...,
        dishes[]->,
       type-> {
         name
       }
  },
}[0]
      
      `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, [id]);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4 pb-4"
        showsHorizontalScrollIndicator={false}
      >
        {/* restorants cards */}
        {restaurants?.map(
          ({
            _id,
            image,
            address,
            name,
            dishes,
            rating,
            short_description,
            type,
            long,
            lat,
          }) => (
            <RestorantCard
              key={_id}
              id={_id}
              img={image}
              title={name}
              rating={rating}
              genre={type?.name}
              address={address}
              short_description={short_description}
              dishes={dishes}
              long={long}
              lat={lat}
              
            />
          )
        )}
      </ScrollView>
    </View>
  );
}
