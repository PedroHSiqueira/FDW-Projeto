import { Text, Image, View, ScrollView, Linking, TouchableOpacity, Dimensions, Modal, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "moment/locale/pt-br";
import { useLocalSearchParams } from "expo-router";

interface Noticia {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  image_url?: string;
  content?: string;
}

export default function NoticiasPrincipais() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [noticiaSelecionada, setNoticiaSelecionada] = useState<Noticia | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [carregando, setCarregando] = useState(true);
  const { width } = Dimensions.get("window");

  const { busca } = useLocalSearchParams();

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        setCarregando(true);

        const termoBusca = busca ? String(busca) : "tecnologia OR lula OR trump OR zelenski OR putin OR internacional saúde OR política OR futebol OR champions OR economia OR esportes OR entretenimento OR cultura OR educação OR meio ambiente";

        const response = await axios.get(`https://gnews.io/api/v4/search?q=${termoBusca}&lang=pt&max=10&token=6200a856a7a047b856fd161ec9644ad8`);

        const noticiasComImagem = response.data.articles
        .filter((item: any) =>
          item.image &&
          !item.image.includes("imguol.com.br") &&
          !item.image.includes("em.com.br")
        )
          .slice(0, 4)
          .map((item: any) => ({
            title: item.title,
            link: item.url,
            pubDate: item.publishedAt,
            description: item.description,
            image_url: item.image,
            content: item.content,
          }));

        setNoticias(noticiasComImagem);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
        setNoticias([]);
      } finally {
        setCarregando(false);
      }
    };

    fetchNoticias();
  }, [busca]);

  const abrirModal = (noticia: Noticia) => {
    setNoticiaSelecionada(noticia);
    setModalVisible(true);
  };

  const fecharModal = () => {
    setNoticiaSelecionada(null);
    setModalVisible(false);
  };

  return (
    <ScrollView className="bg-[#f9f4ef]">
      <View className="items-center px-4 pb-10">
        <Text className="text-lg font-semibold my-4 text-center">{busca ? `Resultados para: "${busca}"` : "Notícias em destaque"}</Text>

        {carregando ? (
          <ActivityIndicator size="large" color="#000" />
        ) : noticias.length === 0 ? (
          <Text className="text-center text-gray-500 mt-6">Nenhuma notícia encontrada.</Text>
        ) : (
          <View
            style={{
              maxWidth: 1200,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            {noticias.map((noticia, index) => (
              <View
                key={index}
                className="bg-white rounded-3xl p-4 shadow shadow-black/10"
                style={{
                  elevation: 3,
                  width: width >= 1024 ? "32%" : width >= 768 ? "48%" : width <= 600 ? "100%" : "48%",
                  marginBottom: 20,
                }}
              >
                <Text className="text-[#181818] font-bold text-lg text-center">{noticia.title}</Text>

                <Text className="text-gray-500 text-sm text-center mt-1">{moment(noticia.pubDate).format("LLL")}</Text>

                <Image
                  source={{ uri: noticia.image_url! }}
                  style={{
                    width: "100%",
                    height: 180,
                    marginTop: 16,
                    borderRadius: 12,
                    resizeMode: "cover",
                  }}
                />

                <Text className="text-[#181818] font-medium text-base text-justify mt-4">{noticia.description}</Text>

                <TouchableOpacity onPress={() => abrirModal(noticia)} className="bg-blue-600 px-4 py-2 mt-4 rounded-lg">
                  <Text className="text-white font-semibold text-center">Ver mais</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL(noticia.link)}>
                  <Text className="text-blue-600 mt-3 text-sm underline text-center">Leia a matéria completa</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </View>

      {noticiaSelecionada && (
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={fecharModal}>
          <View className="flex-1 justify-center items-center bg-black/50 px-4">
            <View className="bg-white rounded-2xl w-full max-w-[600px] max-h-[90%]">
              <ScrollView contentContainerStyle={{ padding: 20 }} showsVerticalScrollIndicator={false}>
                {noticiaSelecionada.image_url && (
                  <Image
                    source={{ uri: noticiaSelecionada.image_url }}
                    style={{
                      width: "100%",
                      height: 180,
                      borderRadius: 12,
                      marginBottom: 16,
                    }}
                    resizeMode="cover"
                  />
                )}

                <Text className="text-lg font-bold text-center mb-1">{noticiaSelecionada.title}</Text>

                <Text className="text-gray-500 text-sm text-center mb-4">{moment(noticiaSelecionada.pubDate).format("LLL")}</Text>

                {noticiaSelecionada.content && <Text className="text-gray-700 text-sm leading-relaxed">{noticiaSelecionada.content.replace(/\[[^\]]*\]$/, "")}</Text>}

                <TouchableOpacity onPress={() => Linking.openURL(noticiaSelecionada.link)} className="bg-blue-600 py-2 mt-5 px-5 rounded-xl self-center">
                  <Text className="text-white font-semibold text-center">Ver na íntegra</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={fecharModal} className="bg-red-500 mt-5 py-2 px-5 rounded-xl self-center">
                  <Text className="text-white font-semibold text-center">Fechar</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </Modal>
      )}
    </ScrollView>
  );
}
