import { View, Text, TextInput, TouchableOpacity, Image, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { router } from "expo-router";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export default function Registro() {
  const { register, handleSubmit } = useForm<Inputs>();
  const { control } = useForm<Inputs>();

  async function verificaCadastro(data: Inputs) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/usuarios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: data.name,
        email: data.email,
        senha: data.password,
      }),
    });
    if (response.status === 201) {
      const dados = await response.json();
      router.push("/login");
    }
  }

  return (
    <View className="flex-1 bg-[#1A1A1A] justify-center items-center p-6">
      <TouchableOpacity className="items-center mb-8">
        <Image source={require("../../../../public/logo.png")} style={{ width: 100, height: 100, resizeMode: "contain" }} resizeMode="contain" />
        <Text className="text-white text-2xl font-bold mt-2">Diário Digital</Text>
      </TouchableOpacity>

      <View className="w-full max-w-[400px]">
        <TouchableOpacity onPress={handleSubmit(verificaCadastro)}>
          <Text className="text-white mb-2">Nome:</Text>
          <Controller control={control} name="name" render={({ field: { onChange, value } }) => <TextInput className="bg-[#1E1E1E] border border-[#333] rounded-lg p-3 text-white" placeholder="Digite seu Nome" placeholderTextColor="#999" onChangeText={onChange} value={value} keyboardType="default" autoCapitalize="none" />} />

          <Text className="text-white mb-2 mt-2">E-mail:</Text>
          <Controller control={control} name="email" render={({ field: { onChange, value } }) => <TextInput className="bg-[#1E1E1E] border border-[#333] rounded-lg p-3 text-white" placeholder="Digite seu E-mail" placeholderTextColor="#999" onChangeText={onChange} value={value} keyboardType="email-address" autoCapitalize="none" />} />

          <Text className="text-white mt-4 mb-2">Sua Senha:</Text>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <View className="relative">
                <TextInput className="bg-[#1E1E1E] border border-[#333] rounded-lg p-3 text-white" placeholder="Digite sua senha" placeholderTextColor="#999" onChangeText={onChange} value={value} />
                <TouchableOpacity className="absolute right-3 top-3"></TouchableOpacity>
              </View>
            )}
          />

          <TouchableOpacity className="bg-white p-3 rounded-lg items-center mb-6 mt-6">
            <Text className="font-bold text-base text-black" onPress={handleSubmit(verificaCadastro)}>
              Criar Conta
            </Text>
          </TouchableOpacity>

          <View className="flex-row justify-between">
            <TouchableOpacity>
              <Text className="text-white font-semibold">Já Possuo Login</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
