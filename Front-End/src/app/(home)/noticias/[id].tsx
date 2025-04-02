import { useLocalSearchParams } from "expo-router";
import { Text, ScrollView } from "react-native";
export default function Login() {
  const { id } = useLocalSearchParams();
  return (
    <ScrollView className="mt-0">
      <Text>alguem faça o login {id}</Text>
    </ScrollView>
  );
}
