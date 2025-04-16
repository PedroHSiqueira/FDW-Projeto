import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function SobreNos() {
    return (
        <ScrollView className=" bg-[#f9f4ef] px-5 pt-12 lg:px-0">
            <View className="mb-5 items-center">
                <Text className="text-2xl font-bold">Sobre Nós</Text>
            </View>

            <Text className="text-base leading-6 text-justify text-black lg:max-w-[800px] lg:mx-auto lg:px-5">
                Seja muito bem-vindo ao Diário Digital, uma plataforma criada com o propósito de tornar a informação mais acessível, rápida e organizada para todos os usuários.{"\n\n"}

                Nosso projeto nasceu da ideia de oferecer um ambiente limpo, funcional e direto ao ponto para quem deseja acompanhar os principais acontecimentos do mundo. Desde o primeiro acesso, o visitante é recebido com uma landing page repleta de notícias internacionais de destaque, permitindo uma leitura rápida e objetiva do que está acontecendo ao redor do globo.{"\n\n"}

                Ao realizar o login, o usuário passa a ter acesso a recursos adicionais, como navegação por categorias temáticas, organizadas para facilitar a localização de conteúdos de interesse específico. Além disso, oferecemos uma ferramenta de busca inteligente, permitindo que o usuário encontre rapidamente qualquer notícia dentro da nossa base, de forma prática e eficiente.{"\n\n"}

                Nosso compromisso é entregar informação de qualidade com uma experiência de uso fluida e responsiva, seja no computador, tablet ou celular. O Diário Digital é ideal para quem valoriza conteúdo confiável, atualizado e fácil de consumir, sem distrações e poluição visual.{"\n\n"}

                Estamos sempre evoluindo, ouvindo nossos usuários e buscando melhorar continuamente a plataforma. Agradecemos por fazer parte dessa jornada com a gente.
            </Text>
            <View className='mt-16'></View>
        </ScrollView>
    );
}
