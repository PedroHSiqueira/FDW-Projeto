import React from "react";
import { Image, View, Text, useWindowDimensions } from "react-native";
import tw from "twrnc";

export default function Banner() {
  const { width } = useWindowDimensions();
  const isLargeScreen = width >= 1024; 

  const imageSize = isLargeScreen ? 280 : width >= 768 ? 200 : 150;
  const maxTextWidth = isLargeScreen ? 600 : width >= 768 ? 500 : "90%";

  return (
    <View
      style={tw.style(
        "bg-[#094067] px-8 py-12",
        isLargeScreen ? "flex-row justify-center items-center" : "flex-col items-center"
      )}
    >
      <Image
        source={require("../../public/celular.png")}
        style={{
          width: imageSize,
          height: imageSize,
          resizeMode: "contain",
          marginRight: isLargeScreen ? 32 : 0,
          marginBottom: isLargeScreen ? 0 : 20,
        }}
      />

      <View
        style={{
          maxWidth: maxTextWidth,
          alignItems: isLargeScreen ? "flex-start" : "center",
        }}
      >
        <Text
          style={tw.style(
            "text-white font-bold mb-3",
            isLargeScreen ? "text-3xl text-left" : width >= 768 ? "text-2xl text-left" : "text-lg text-center"
          )}
        >
          📢 Suas Notícias, Seu Jeito!
        </Text>

        <Text
          style={tw.style(
            "text-white italic leading-7",
            isLargeScreen ? "text-lg text-left" : width >= 768 ? "text-base text-left" : "text-sm text-center"
          )}
        >
          Escolha os temas que mais importam para você e tenha um feed personalizado com as notícias mais relevantes. Informação rápida, confiável e no seu estilo!
        </Text>
      </View>
    </View>
  );
}
