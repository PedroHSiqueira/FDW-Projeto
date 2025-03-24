import { Text, Image, View, ScrollView } from "react-native";
import Banner from "../components/banner";
export default function Index() {
  return (
    <ScrollView className="mt-0">
      <Banner />

      <View className="flex p-7 mt-10 justify-center items-center">
        <Text className="text-black font-black text-xl text-center">
          Notícias Exclusivas, Apenas para Você</Text>
        <View className="flex flex-row justify-between gap-10 mt-7">
          <Image
            source={require("../../public/logo.png")}
            className="w-[10rem] h-[10rem]"
          />
          <View className="flex items-center text-center mx-1 justify-center">
            <Text className="text-black text-center font-bold text-sm mt-2 max-w-[150px]">
              Escolha os temas que mais importam
              para você e tenha um feed
              personalizado com as notícias
              mais relevantes. Informação rápida,
              confiável e no seu estilo!
            </Text>
          </View>
        </View>
      </View>
      <View className="flex justify-center items-center">
        <Text className="text-black font-black text-xl max-w-80 text-center mt-10">
          Principais Notícias do Mundo e Brasil  nas últimas 24 horas
        </Text>
        <View className="flex flex-row justify-center mt-7">
          <Image
            source={require("../../public/noticia.png")}
            className="w-50 h-50"
          />
        </View>
      </View>

      <View className="flex justify-center items-center">
        <Text className="text-black font-black text-xl max-w-80 text-center mt-10">
          O que acontece se Bolsonaro e aliados virarem réus? Veja o que estará em jogo no STF nesta terça
        </Text>
        <View className="flex flex-row justify-center mt-7">
          <Image
            source={require("../../public/bolsonaro.jpeg")}
            className="w-[25rem] h-[15rem]"
          />
        </View>
      </View>
    </ScrollView>
  );
}
