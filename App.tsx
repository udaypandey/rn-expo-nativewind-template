import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-bold text-4xl text-red-500">Hello world</Text>
      <Text className="italic text-2xl text-cyan-400">Its good to be here</Text>
      <StatusBar style="auto" />
    </View>
  );
}
