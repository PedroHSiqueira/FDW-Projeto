import { Alert, Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { TextInput } from "react-native";
import { useState } from "react";
import { supabase } from "@/src/lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert("Erro", error.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    router.push("/(home)/main");

  }
  return (
    <View className="flex-1 bg-[#1A1A1A] justify-center items-center p-6">
      <View className="items-center mb-8">
        <Image source={require("../../../../../public/logo.png")} style={{ width: 100, height: 100, resizeMode: "contain", zIndex: -1 }} />
        <Text className="text-white text-2xl font-bold mt-2">Diário Digital</Text>
      </View>

      <View className="w-full max-w-[400px] gap-3">
        <View className="w-full max-w-[400px]">
          <Text className="text-white mb-2">Email:</Text>
          <TextInput className="bg-[#1E1E1E] border border-[#333] rounded-lg p-3 text-white" placeholder="Digite seu Email" placeholderTextColor="#999" onChangeText={setEmail} value={email} keyboardType="email-address" autoCapitalize="none" />
        </View>
        <View className="w-full max-w-[400px]">
          <Text className="text-white mb-2">Senha:</Text>
          <TextInput className="bg-[#1E1E1E] border border-[#333] rounded-lg p-3 text-white" placeholder="Digite sua Senha" placeholderTextColor="#999" onChangeText={setPassword} value={password} keyboardType="default" autoCapitalize="none" />
        </View>

        <Pressable onPress={handleLogin} className="bg-white p-3 rounded-lg items-center mb-6 mt-6">
          <Text className="font-bold text-base text-black">{loading ? "Carregando..." : "Entrar"}</Text>
        </Pressable>

        <View className="flex-row justify-between">
          <TouchableOpacity onPress={() => router.push("/(home)/(Auth)/signup/page")}>
            <Text className="text-white font-semibold">Não possui Conta?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
