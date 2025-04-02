import { View, Text, Image } from "react-native";
import tw from "twrnc";
import { Link, useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Navbar() {
  return (
    <View style={tw`flex-row p-4 shadow-lg bg-white justify-between items-center`}>
      <Link href={"/"}>
        <Image source={require("../../public/logo.png")} style={tw`w-12 h-12`} />
      </Link>

      <View style={tw`flex-1 items-center justify-center`}>
        <Link className="px-2 py-1 ml-2 rounded-full border-[2px] border-[#101829]" href="/noticias/page" asChild>
          <Text style={tw`text-black text-xs font-bold`}>
            <Icon name="search" size={16} color="#000" /> Buscar
          </Text>
        </Link>
      </View>

      <View style={tw`flex-1 items-center justify-center`}>
        <Link href="/login" asChild>
          <Text style={tw`bg-white px-2 ml-2 py-1 font-bold rounded-full border-[2px] border-[#101829] text-xs`}>Entrar Agora</Text>
        </Link>
      </View>
    </View>
  );
}
