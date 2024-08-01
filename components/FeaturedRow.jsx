import { ScrollView, Text, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestorantCard from "./RestorantCard";

export default function FeaturedRow({ title, description, id }) {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className='text-xs text-gray-500 px-4'>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15
        }}
        className='pt-4 pb-4'
        showsHorizontalScrollIndicator={false}
      >
        {/* restorants cards */}
        <RestorantCard 
            id='1'
            img='https://links.papareact.com/gn7'
            title='Sushi'
            rating={4.5}
            genre='japanese'
            address='123 main st'
            short_description='test description'
            dishes={[]}
            long={20}
            lat={0}
        />
        <RestorantCard 
            id='1'
            img='https://links.papareact.com/gn7'
            title='Sushi'
            rating={4.5}
            genre='japanese'
            address='123 main st'
            short_description='test description'
            dishes={[]}
            long={20}
            lat={0}
        />
        <RestorantCard 
            id='1'
            img='https://links.papareact.com/gn7'
            title='Sushi'
            rating={4.5}
            genre='japanese'
            address='123 main st'
            short_description='test description'
            dishes={[]}
            long={20}
            lat={0}
        />
        <RestorantCard 
            id='1'
            img='https://links.papareact.com/gn7'
            title='Sushi'
            rating={4.5}
            genre='japanese'
            address='123 main st'
            short_description='test description'
            dishes={[]}
            long={20}
            lat={0}
        />
      </ScrollView>
    </View>
  );
}
