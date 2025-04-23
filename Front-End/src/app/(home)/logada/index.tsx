import {ScrollView} from "react-native";
import "moment/locale/pt-br";
import NoticiasPrincipais from "@/src/components/noticiasIniciais";

export default function PaginaLogada() {
  return (
    <ScrollView className="bg-[#f9f4ef]">
      <NoticiasPrincipais />
    </ScrollView>
  );
}
