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
    <View style={{ flex: 1, backgroundColor: "#0B0F18", justifyContent: "center", alignItems: "center", padding: 24 }}>
      <TouchableOpacity style={{ alignItems: "center", marginBottom: 32 }}>
        <Image source={require("../../../../public/logo.png")} style={{ width: 100, height: 100, resizeMode: "contain" }} />
        <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold", marginTop: 8 }}>Diário Digital</Text>
      </TouchableOpacity>

      <View style={{ width: "100%", maxWidth: 400 }}>
        <Text style={{ color: "#fff", marginBottom: 8 }}>Seu Email:</Text>
        <Controller control={control} name="email" render={({ field: { onChange, value } }) => <TextInput style={inputStyle} placeholder="Digite seu e-mail" placeholderTextColor="#999" onChangeText={onChange} value={value} keyboardType="email-address" autoCapitalize="none" />} />

        <Text style={{ color: "#fff", marginTop: 16, marginBottom: 8 }}>Sua Senha:</Text>
        <Controller
          control={control}
          name="senha"
          render={({ field: { onChange, value } }) => (
            <View style={{ position: "relative" }}>
              <TextInput style={inputStyle} placeholder="Digite sua senha" placeholderTextColor="#999" onChangeText={onChange} value={value} />
              <TouchableOpacity style={{ position: "absolute", right: 12, top: 12 }}></TouchableOpacity>
            </View>
          )}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            padding: 12,
            borderRadius: 8,
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Entrar</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity>
            <Text style={{ color: "#fff", fontWeight: "600" }}>Registrar-se</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: "#fff", fontWeight: "600" }}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const inputStyle = {
  backgroundColor: "#1E1E1E",
  borderColor: "#333",
  borderWidth: 1,
  borderRadius: 8,
  padding: 12,
  color: "#fff",
};
