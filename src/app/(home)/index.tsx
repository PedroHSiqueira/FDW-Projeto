import { Text, View, ScrollView, Image } from "react-native";
import Banner from "../../components/banner";
import "moment/locale/pt-br";
import NoticiasPrincipais from "../../components/noticiasIniciais";

export default function Index() {
  return (
    <ScrollView className="bg-[#f9f4ef]">
      <Banner />

      <View className="mt-10 flex px-4 py-10 justify-center items-center w-full">
        <Text className="text-[#181818] font-black text-xl text-center max-w-xs">Notícias Exclusivas, Apenas para Você</Text>

        <View className="flex flex-col items-center justify-center gap-6 mt-10 w-full lg:flex-row lg:items-center lg:justify-center lg:gap-24 lg:max-w-5xl">
          <Image source={require("../../../public/logo.png")} style={{ width: 200, height: 200, resizeMode: "contain" }} />

          <View className="max-w-md text-center lg:text-left">
            <Text className="text-[#2e2e2e] font-bold text-lg">Escolha os temas que mais importam para você e tenha um feed personalizado com as notícias mais relevantes. Informação rápida, confiável e no seu estilo! Faça login para ter acesso a notícias exclusivas e personalizadas.</Text>
          </View>
        </View>
      </View>
      <NoticiasPrincipais />
    </ScrollView>
  );
}
