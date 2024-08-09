import { SafeAreaView } from "react-native";
import * as Animatable from 'react-native-animatable'

export default function PreparingOrder() {
  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
      <Animatable.Image 
        source={require('../assets/order loading.gif')}
        animation='slideInUp'
        iterationCount={1}
        className='h-[25rem] w-[25rem]'
      />
    </SafeAreaView>
  );
}
