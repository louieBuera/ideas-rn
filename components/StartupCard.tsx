import { Author, Startup } from "@/assets/types";
import { formatDate } from "@/lib/utils";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Eye } from 'lucide-react-native';

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

export default function StartupCard({
  post
}: { post: StartupTypeCard }) {
  const {
    _id, _createdAt, views,
    author,
    title, image, description, category
  } = post;

  return <View className="startup-card w-[45%]">
    <View className="flex justify-between flex-row">
      <Text className="justify-start text-xl">
        { formatDate(_createdAt) }
      </Text>
      <View className="flex flex-row justify-end"
      >
        <Eye size={26}/>
        <Text className="text-2xl">{' '}{ views }</Text>
      </View>
    </View>

    <View className="flex flex-row mt-5 gap-5">
      <View className="flex-1">
        <Text className="text-xl font-bold">{ author?.name }</Text>
        <Text className="text-3xl">{ title }</Text>
      </View>
      <Image source={{
        uri: author?.image
          ? author.image
          : "https://placehold.co/48x48"
      }} className="size-[48px]"/>
      
    </View>
    <TouchableOpacity className="w-full">
      <Text className="text-l">{ description }</Text>
      <Image className="w-full h-52 rounded-lg"
        source={{ uri: image }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  </View>
}