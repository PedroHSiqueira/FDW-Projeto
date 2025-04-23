import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";

type Inputs = {
  email: string;
  senha: string;
  continuarConectado: boolean;
};

export default function Login() {
  const { control } = useForm<Inputs>();

  return (
    <View className="flex-1 bg-[#0B0F18] justify-center items-center p-6">
      <TouchableOpacity className="items-center mb-8">
        <Image
          source={require("../../../../public/logo.png")}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          resizeMode="contain"
        />
        <Text className="text-white text-2xl font-bold mt-2">Diário Digital</Text>
      </TouchableOpacity>

      <View className="w-full max-w-[400px]">
        <Text className="text-white mb-2">Seu Email:</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextInput
              className="bg-[#1E1E1E] border border-[#333] rounded-lg p-3 text-white"
              placeholder="Digite seu e-mail"
              placeholderTextColor="#999"
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          )}
        />

        <Text className="text-white mt-4 mb-2">Sua Senha:</Text>
        <Controller
          control={control}
          name="senha"
          render={({ field: { onChange, value } }) => (
            <View className="relative">
              <TextInput
                className="bg-[#1E1E1E] border border-[#333] rounded-lg p-3 text-white"
                placeholder="Digite sua senha"
                placeholderTextColor="#999"
                onChangeText={onChange}
                value={value}
              />
              <TouchableOpacity className="absolute right-3 top-3">
              </TouchableOpacity>
            </View>
          )}
        />

        <TouchableOpacity className="bg-white p-3 rounded-lg items-center mb-6 mt-6">
          <Text className="font-bold text-base text-black">Entrar</Text>
        </TouchableOpacity>

        <View className="flex-row justify-between">
          <TouchableOpacity>
            <Text className="text-white font-semibold">Registrar-se</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-white font-semibold">Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
