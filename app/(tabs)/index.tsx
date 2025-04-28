import StartupCard from "@/components/StartupCard";
import { fetchIdeas } from "@/services/api";
import { useFetch } from "@/services/useFetch";
import { Text, View, ScrollView, FlatList } from "react-native";

export default function Index() {

  const {
    data: ideas,
    loading,
    error
  } = useFetch(() => fetchIdeas({
    // query: undefined
  }));
  
  return (
    <ScrollView
      className="flex-1"
    >
      <View className="pink_container">
        <View className="bg-black p-7">
          <Text className="text-6xl font-bold text-white">
            Learning React Native Expo
          </Text>
        </View>
        
      </View>
      <FlatList

        scrollEnabled={false}
        data={ideas}
        renderItem={({item}) => <StartupCard post={item}/>}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-around'
        }}
      >

      </FlatList>
    </ScrollView>
  );
}
