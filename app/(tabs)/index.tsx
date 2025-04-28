import { images } from "@/constants/images";
import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundImage: images.bg
      }}
    >
      <Image source={images.bg}
        className="absolute w-full z-0"
        style={{ opacity: 0.1 }}
        resizeMode="cover"
      />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
