import { ScrollView, Text } from "react-native";
import CategoryCard from "./CategoryCard";
import { useEffect, useState } from "react";
import sanityClient from "../sanity";

export default function Categories() {
  const [Categories, setCategories] = useState([])

  useEffect(()=> {
    sanityClient.fetch(`
      
      *[_type == "category"]
      
      `).then((data)=>{
        setCategories(data)
      })
  }, [])
  return (
    <ScrollView
      className="bg-gray-400"
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 10
      }}
    >
      {
        Categories?.map(({ image, name, _id })=>(
          <CategoryCard 
            key={_id}
            img={image}
            title={name} 
          />
        ))
      }
     
      
    </ScrollView>
  );
}
