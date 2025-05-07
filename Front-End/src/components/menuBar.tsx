import React, { useState } from "react";
import { View, Text, TouchableOpacity, Animated, Dimensions } from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

export default function MenuBar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const translateX = useState(new Animated.Value(-Dimensions.get("window").width))[0];

  const { width } = Dimensions.get("window");

  const abrirMenu = () => {
    setMenuAberto(true);
    Animated.timing(translateX, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fecharMenu = () => {
    Animated.timing(translateX, {
      toValue: -Dimensions.get("window").width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setMenuAberto(false);
    });
  };

  const menuWidth = width < 768 ? "80%" : width < 1024 ? "60%" : "40%";

  return (
    <>
      <View className="flex-row p-4 bg-slate-200 rounded-s-1xl rounded-e-3xl justify-evenly lg:p-6 xl:p-8">
        <Link href={"/"}>
          <View className="items-center">
            <Icon name="globe" size={24} color="black" />
            <Text className="font-bold text-sm lg:text-base">Mundo</Text>
          </View>
        </Link>

        <Link href="/">
          <View className="items-center">
            <Icon name="home" size={24} color="black" />
            <Text className="font-bold text-sm lg:text-base">Inicio</Text>
          </View>
        </Link>

        <TouchableOpacity onPress={abrirMenu}>
          <View className="items-center">
            <Icon name="reorder" size={24} color="black" />
            <Text className="font-bold text-sm lg:text-base">Menu</Text>
          </View>
        </TouchableOpacity>
      </View>

      {menuAberto && (
        <TouchableOpacity
          onPress={fecharMenu}
          className="absolute top-0 left-0 right-0 bottom-0 bg-black/40"
          activeOpacity={1}
        >
          <Animated.View
            style={{
              transform: [{ translateX }],
              width: menuWidth, 
              height: "100%",
              backgroundColor: "#E2DFDF",
              padding: 15,
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: 1000,
            }}
          >
            <Text className="text-xl font-bold mb-6">Diário Digital</Text>

            <Link href="/login" asChild>
              <TouchableOpacity className="mb-4 flex-row items-center">
                <Icon name="lock" size={24} color="black" />
                <Text className="text-lg ml-2">Login</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/registro" asChild>
              <TouchableOpacity className="mb-4 flex-row items-center">
                <Icon name="edit" size={24} color="black" />
                <Text className="text-lg ml-2">Registro</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/sobre" asChild>
              <TouchableOpacity className="mb-4 flex-row items-center">
                <Icon name="info-circle" size={24} color="black" />
                <Text className="text-lg ml-2">Sobre Nós</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/termos" asChild>
              <TouchableOpacity className="mb-4 flex-row items-center">
                <Icon name="file-text" size={24} color="black" />
                <Text className="text-lg ml-2">Termos de Uso</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/privacidade" asChild>
              <TouchableOpacity className="mb-4 flex-row items-center">
                <Icon name="shield" size={24} color="black" />
                <Text className="text-lg ml-2">Política de Privacidade</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/devs" asChild>
              <TouchableOpacity className="mb-4 flex-row items-center">
                <Icon name="user" size={24} color="black" />
                <Text className="text-lg ml-2">Desenvolvedores</Text>
              </TouchableOpacity>
            </Link>

            <TouchableOpacity onPress={fecharMenu}>
              <Text className="text-red-600 mt-8">Fechar</Text>
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      )}
    </>
  );
}
