import React, { useState } from "react";
import { View, Text, TouchableOpacity, Animated, Dimensions } from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

export default function MenuBar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const translateX = useState(new Animated.Value(-Dimensions.get("window").width))[0];

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

  return (
    <>
      <View className="mt-10 flex-row p-8 bg-slate-200 rounded-s-3xl rounded-e-3xl justify-evenly">
        <Link href={"/"}>
          <View className="items-center">
            <Icon name="globe" size={24} color="black" />
            <Text className="font-bold">Mundo</Text>
          </View>
        </Link>

        <Link href="/">
          <View className="items-center">
            <Icon name="home" size={24} color="black" />
            <Text className="font-bold">Inicio</Text>
          </View>
        </Link>

        <TouchableOpacity onPress={abrirMenu}>
          <View className="items-center">
            <Icon name="reorder" size={24} color="black" />
            <Text className="font-bold">Menu</Text>
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
              width: "70%",
              height: "100%",
              backgroundColor: "#E2DFDF",
              padding: 20,
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: 10,
            }}
          >
            <Text className="text-xl font-bold mb-6">Diário Digital</Text>

            <Link href="/login" asChild>
              <TouchableOpacity className="mb-4">
                <Text className="text-lg">🔐 Login</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/registro" asChild>
              <TouchableOpacity className="mb-4">
                <Text className="text-lg">📝 Registro</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/sobre" asChild>
              <TouchableOpacity className="mb-4">
                <Text className="text-lg">ℹ️ Sobre Nós</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/termos" asChild>
              <TouchableOpacity className="mb-4">
                <Text className="text-lg">📄 Termos de Uso</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/privacidade" asChild>
              <TouchableOpacity className="mb-4">
                <Text className="text-lg">🔒 Política de Privacidade</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/devs" asChild>
              <TouchableOpacity className="mb-4">
                <Text className="text-lg">👨‍💻 Desenvolvedores</Text>
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
