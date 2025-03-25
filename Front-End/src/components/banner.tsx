import React from "react";
import { Image, View, Text } from "react-native";

export default function Banner() {
    return (
        <View className="flex-row p-7 shadow-lg bg-[#1d5586] justify-between">
            <Image
            source={require("../../public/celular.png")}
            className="w-50 h-50 mr-4"
            />
            <View className="flex items-center text-center mx-1 justify-center">
            <Text className="text-white font-black text-lg md:text-xl text-center max-w-[150px]">
                📢 Suas Notícias Seu Jeito!
            </Text>
            <Text className="text-white text-center italic text-sm mt-2 max-w-[150px]">
                Escolha os temas que mais importam
                para você e tenha um feed
                personalizado com as notícias
                mais relevantes. Informação rápida,
                confiável e no seu estilo!
            </Text>
            </View>
        </View>
    );
}
