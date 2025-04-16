import { Text, ScrollView, View } from "react-native";
import NoticiasPrincipais from "../../../components/noticiasIniciais";
export default function Login() {
  return (
    <ScrollView className="mt-0">
      <View className="bg-[#f9f4ef] min-h-screen">
        <NoticiasPrincipais />
      </View>
    </ScrollView>
  );
}