import { ScrollView, Text } from "react-native";
import CategoryCard from "./CategoryCard";

export default function Categories() {
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
      <CategoryCard img="https://links.papareact.com/gn7" title='testing'/>
      <CategoryCard img="https://links.papareact.com/gn7" title='testing'/>
      <CategoryCard img="https://links.papareact.com/gn7" title='testing'/>
      <CategoryCard img="https://links.papareact.com/gn7" title='testing'/>
      <CategoryCard img="https://links.papareact.com/gn7" title='testing'/>
      <CategoryCard img="https://links.papareact.com/gn7" title='testing'/>
      
    </ScrollView>
  );
}
