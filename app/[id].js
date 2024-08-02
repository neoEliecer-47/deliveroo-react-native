import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import RestaurantScreen from "../screens/RestaurantScreen";
import sanityClient from '../sanity'

export default function RestaurantDetails() {
  const { id } = useLocalSearchParams();
  const [outlet, setOutlet] = useState([]);

  console.log(id)
  useEffect(() => {
    if(id){
          sanityClient
          .fetch(
            `
  *[_type == "restaurant" && _id == $id] {
          ...,
        restaurants[]->{
          ...,
        dishes[]->,
       type-> {
         name
       }
  },
}
            `,
            { id }
          )
          .then((data) => {
            setOutlet(data);
          });
         
    }
  }, [id]);
//console.log(outlet)
  return (
    <View>
      {outlet?.map(
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
          <RestaurantScreen
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
    </View>
  );
}
