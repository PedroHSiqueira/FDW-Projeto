import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

export default function MenuBar() {
  return (
    <View className="mt-10 flex-row p-8 bg-slate-200 rounded-3xl justify-evenly">
      <Link href={"/"}>
        <View className="items-center">
          <Icon name="globe" size={24} color="black" />
          <Text className="font-bold">Mundo</Text>
        </View>
      </Link>

      <Link href="/noticias/page">
        <View className="items-center">
          <Icon name="home" size={24} color="black" />
          <Text className="font-bold">Inicio</Text>
        </View>
      </Link>

      <Link href="/">
        <View className="items-center">
          <Icon name="reorder" size={24} color="black" />
          <Text className="font-bold">Menu</Text>
        </View>
      </Link>
    </View>
  );
}
