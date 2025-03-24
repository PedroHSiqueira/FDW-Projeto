import React from "react";
import { Button, Image, TouchableOpacity, View, Text } from "react-native";
import tw from "twrnc";

export default function Banner() {
    return (
        <View style={tw`flex-row p-8 shadow-lg bg-[#1d5586] justify-between`}>
            <Image
                source={require("../../public/celular.png")}
                style={tw`w-40 h-50 mr-4`}
            />
            <View style={tw`text-center ml-1`}>
                <Text style={tw`text-white font-black text-xl`}>
                    📢 Suas Notícias{"\n"}Seu Jeito!
                </Text>
                <Text style={tw`text-white font- text-sm mt-2`}>
                    Escolha os temas que mais {"\n"} importam
                    para você e tenha {"\n"} um feed
                    personalizado com {"\n"} as notícias
                    mais relevantes. {"\n"} Informação rápida,
                    confiável {"\n"} e no seu estilo!
                </Text>
            </View>
        </View>
    );
}
