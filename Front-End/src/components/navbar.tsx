import { useState } from "react";
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Navbar() {
  const { width } = Dimensions.get("window");
  const isLargeScreen = width >= 768;
  const router = useRouter();

  const [termoBusca, setTermoBusca] = useState("");

  const handleBuscar = () => {
    if (termoBusca.trim()) {
      router.push(`/noticias/page?busca=${encodeURIComponent(termoBusca.trim())}`);
      setTermoBusca("");
    }
  };

  const handleCancelarBusca = () => {
    setTermoBusca("");
  };

  return (
    <View style={tw` z-10 flex-row items-center justify-between px-4 py-3 bg-white shadow-md w-full`}>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Image source={require("../../public/logo.png")} style={tw`w-12 h-12`} resizeMode="contain" />
      </TouchableOpacity>

      <View style={tw`flex-row items-center border border-gray-300 rounded-full px-3 py-1 bg-white mx-2`}>
        <TextInput style={[tw`text-black text-xs py-1`, { width: isLargeScreen ? 200 : 120 }]} placeholder="Buscar..." value={termoBusca} onChangeText={setTermoBusca} onSubmitEditing={handleBuscar} returnKeyType="search" placeholderTextColor="#888" />
        {termoBusca.length > 0 && (
          <TouchableOpacity onPress={handleCancelarBusca} style={tw`ml-2`}>
            <Icon name="times" size={14} color="#888" />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={handleBuscar} style={tw`ml-2`}>
          <Icon name="search" size={16} color="#000" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => router.push("/login")} style={tw`px-3 py-1 border-2 border-[#101829] rounded-full bg-white`}>
        <Text style={tw`text-xs font-bold text-black`}>Entrar Agora</Text>
      </TouchableOpacity>
    </View>
  );
}
