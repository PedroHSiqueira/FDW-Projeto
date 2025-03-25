import { View, Text, Image } from "react-native";
import tw from "twrnc";
import { Link, useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Navbar() {
  const router = useRouter();

  return (
    <View style={tw`flex-row p-8 shadow-lg bg-white justify-between`}>
     <Link href={"/"}><Image source={require("../../public/logo.png")} style={tw`w-14 h-14`} /></Link>

      <View style={tw`flex-1 items-center justify-center`}>
        <Link className="px-4 py-1 ml-3 rounded-full border-[3px] border-[#101829]" href={"/"}
        >
          <Text style={tw`text-black text-sm font-bold`}>
            <Icon name="search" size={20} color="#000" /> Buscar
          </Text>
        </Link>
      </View>

      <View style={tw`flex-1 items-center justify-center`}>
        <Link href="/login/page" asChild>
          <Text style={tw`bg-white px-4 ml-3 py-1 font-bold rounded-full border-[3px] border-[#101829]`}>Entrar Agora</Text>
        </Link>
      </View>
    </View>
  );
}
