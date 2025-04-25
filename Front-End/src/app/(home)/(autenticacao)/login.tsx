import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Link, useRouter } from "expo-router";
import Cookies from "js-cookie";
import { useUsuarioStore } from "@/src/context/user";


type Inputs = {
  email: string;
  password: string;
  continuarConectado: boolean;
};

export default function Login() {
  const { register, handleSubmit } = useForm<Inputs>();
  const { control } = useForm<Inputs>();
  const router = useRouter();
  const { logar } = useUsuarioStore();

  async function verificaLogin(data: Inputs) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email, senha: data.password }),
    });
    if (response.status === 200) {
      const dados = await response.json();
      logar(dados);

      Cookies.set("descricao", dados.descricao);
      Cookies.set("token_usuario_logado", "Aprovado");

      if (data.continuarConectado) {
        localStorage.setItem("client_key", JSON.stringify(dados.id));
      } else {
        if (localStorage.getItem("client_key")) {
          localStorage.removeItem("client_key");
        }
      }

      if (Object.values(dados).some((value) => value === null)) {
        router.push("/");
      }
    }
  }

  return (
    <View className="flex-1 bg-[#1A1A1A] justify-center items-center p-6">
      <TouchableOpacity className="items-center mb-8">
        <Image
          source={require("../../../../public/logo.png")}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          resizeMode="contain"
        />
        <Text className="text-white text-2xl font-bold mt-2">Diário Digital</Text>
      </TouchableOpacity>

      <View className="w-full max-w-[400px]">
        <form onSubmit={handleSubmit(verificaLogin)}>
        <Text className="text-white mb-2">Seu Email:</Text>
        <Controller
          control={control}
          required {...register("email")}
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
        required {...register("password")}
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <View className="relative">
              <TextInput
                className="bg-[#1E1E1E] border border-[#333] rounded-lg p-3 text-white"
                placeholder="Digite sua Senha"
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
          <Link href="/registro" className="text-white font-semibold">Registrar-se</Link>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-white font-semibold">Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
        </form>
      </View>
    </View>
  );
}
