import React, { useState } from "react";
import { View, Text, TouchableOpacity, Animated, Dimensions, Button, Alert } from "react-native";
import { Link, router } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";

export default function MenuBar() {
  const { user, setAuth } = useAuth();
  const [menuAberto, setMenuAberto] = useState(false);
  const [categoriasAbertas, setCategoriasAbertas] = useState(false);

  const { width } = Dimensions.get("window");
  const menuWidth = width < 768 ? "80%" : width < 1024 ? "60%" : "40%";

  const translateMenuX = useState(new Animated.Value(-Dimensions.get("window").width))[0];
  const translateCategoriasX = useState(new Animated.Value(-Dimensions.get("window").width))[0];

  const abrirMenu = () => {
    setMenuAberto(true);
    Animated.timing(translateMenuX, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fecharMenu = () => {
    Animated.timing(translateMenuX, {
      toValue: -Dimensions.get("window").width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setMenuAberto(false));
  };

  const abrirCategorias = () => {
    setCategoriasAbertas(true);
    Animated.timing(translateCategoriasX, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fecharCategorias = () => {
    Animated.timing(translateCategoriasX, {
      toValue: -Dimensions.get("window").width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setCategoriasAbertas(false));
  };

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();
    setAuth(null);
    if (error) {
      Alert.alert("Erro ao sair:", "ao sair do aplicativo, ocorreu um erro");
    }
    fecharMenu();
    fecharCategorias();
  }

  return (
    <>
      {/* Barra principal inferior */}
      <View className="flex-row p-4 bg-slate-200 rounded-s-1xl rounded-e-3xl justify-evenly lg:p-6 xl:p-8">
        {/* Botão de Categorias */}
        {user && (
          <TouchableOpacity onPress={abrirCategorias}>
            <View className="items-center">
              <Icon name="tag" size={24} color="black" />
              <Text className="font-bold text-sm lg:text-base">Categorias</Text>
            </View>
          </TouchableOpacity>
        )}

        {/* Início */}
        <Link href="/">
          <View className="items-center">
            <Icon name="home" size={24} color="black" />
            <Text className="font-bold text-sm lg:text-base">Início</Text>
          </View>
        </Link>

        {/* Botão Menu */}
        <TouchableOpacity onPress={abrirMenu}>
          <View className="items-center">
            <Icon name="reorder" size={24} color="black" />
            <Text className="font-bold text-sm lg:text-base">Menu</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Drawer Lateral - Menu */}
      {menuAberto && (
        <TouchableOpacity onPress={fecharMenu} className="absolute top-0 left-0 right-0 bottom-0 bg-black/40" activeOpacity={1}>
          <Animated.View
            style={{
              transform: [{ translateX: translateMenuX }],
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

            <Link href="/(home)/(Auth)/login/page" asChild>
              <TouchableOpacity className="mb-4 flex-row items-center">
                <Icon name="lock" size={24} color="black" />
                <Text className="text-lg ml-2">Login</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/(home)/(Auth)/signup/page" asChild>
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

            <Button title="Sair" onPress={handleSignOut} color="#FF0000" />
            <TouchableOpacity onPress={fecharMenu}>
              <Text className="text-red-600 mt-8">Fechar</Text>
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      )}

      {/* Drawer Lateral - Categorias */}
      {categoriasAbertas && user && (
        <TouchableOpacity onPress={fecharCategorias} className="absolute top-0 left-0 right-0 bottom-0 bg-black/40" activeOpacity={1}>
          <Animated.View
            style={{
              transform: [{ translateX: translateCategoriasX }],
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
            <Text className="text-xl font-bold mb-6">Categorias</Text>

            <Link href={{ pathname: '/main', params: { busca: 'política' } }} asChild>
  <TouchableOpacity className="mb-4 flex-row items-center">
    <Icon name="group" size={24} color="black" />
    <Text className="text-lg ml-2">Política</Text>
  </TouchableOpacity>
</Link>

<Link href={{ pathname: '/main', params: { busca: 'economia' } }} asChild>
  <TouchableOpacity className="mb-4 flex-row items-center">
    <Icon name="bar-chart-o" size={24} color="black" />
    <Text className="text-lg ml-2">Economia</Text>
  </TouchableOpacity>
</Link>

<Link href={{ pathname: '/main', params: { busca: 'esportes' } }} asChild>
  <TouchableOpacity className="mb-4 flex-row items-center">
    <Icon name="futbol-o" size={24} color="black" />
    <Text className="text-lg ml-2">Esportes</Text>
  </TouchableOpacity>
</Link>

<Link href={{ pathname: '/main', params: { busca: 'tecnologia' } }} asChild>
  <TouchableOpacity className="mb-4 flex-row items-center">
    <Icon name="laptop" size={24} color="black" />
    <Text className="text-lg ml-2">Tecnologia</Text>
  </TouchableOpacity>
</Link>

<Link href={{ pathname: '/main', params: { busca: 'entretenimento' } }} asChild>
  <TouchableOpacity className="mb-4 flex-row items-center">
    <Icon name="film" size={24} color="black" />
    <Text className="text-lg ml-2">Entretenimento</Text>
  </TouchableOpacity>
</Link>

<Link href={{ pathname: '/main', params: { busca: 'cultura' } }} asChild>
  <TouchableOpacity className="mb-4 flex-row items-center">
    <Icon name="camera" size={24} color="black" />
    <Text className="text-lg ml-2">Cultura</Text>
  </TouchableOpacity>
</Link>

<Link href={{ pathname: '/main', params: { busca: 'meio ambiente' } }} asChild>
  <TouchableOpacity className="mb-4 flex-row items-center">
    <Icon name="leaf" size={24} color="black" />
    <Text className="text-lg ml-2">Meio Ambiente</Text>
  </TouchableOpacity>
</Link>

            <TouchableOpacity onPress={fecharCategorias}>
              <Text className="text-red-600 mt-8">Fechar</Text>
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      )}
    </>
  );
}
