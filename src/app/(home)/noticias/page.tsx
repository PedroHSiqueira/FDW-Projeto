import {ScrollView} from "react-native";
import "moment/locale/pt-br";
import NoticiasLogada from "@/src/components/noticiasLogada";

export default function Noticias() {
  return (
    <ScrollView className="bg-[#f9f4ef]">
      <NoticiasLogada />
    </ScrollView>
  );
}
