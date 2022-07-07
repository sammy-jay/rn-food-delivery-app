import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <Text className="text-xl text-green-400">App test</Text>
      <StatusBar style="auto" />
    </View>
  );
}
