'use client'
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function TermosDeServiço() {
    return (
        <ScrollView className="bg-[#f9f4ef] px-5 lg:items-center lg:px-0 pb-10 mt-10">
            <View className="w-full lg:max-w-4xl">
                <Text className="text-2xl font-bold mb-5 text-center">Termos de Uso</Text>

                <Text className="text-base leading-6 text-justify mb-4">
                    Bem-vindo ao Diário Digital! Ao acessar e utilizar nossa plataforma, você concorda com os seguintes termos e condições. Recomendamos que leia com atenção para entender seus direitos e deveres enquanto usuário.
                </Text>

                <Text className="text-lg font-bold mt-6 mb-2">1. Aceitação dos Termos</Text>
                <Text className="text-base leading-6 text-justify mb-4">
                    Ao utilizar o Diário Digital, você concorda com os presentes Termos de Uso e com nossa Política de Privacidade. Caso não concorde com qualquer parte destes termos, recomendamos que não utilize o serviço.
                </Text>

                <Text className="text-lg font-bold mt-6 mb-2">2. Cadastro de Usuário</Text>
                <Text className="text-base leading-6 text-justify mb-4">
                    Para acessar áreas restritas da plataforma, como as categorias exclusivas e ferramentas de pesquisa completa, é necessário realizar um cadastro com informações reais e atualizadas. O usuário é responsável por manter seus dados corretos e por garantir a segurança de sua conta.
                </Text>

                <Text className="text-lg font-bold mt-6 mb-2">3. Uso da Plataforma</Text>
                <Text className="text-base leading-6 text-justify mb-4">
                    O Diário Digital oferece:
                    {'\n\n'}• Uma landing page pública, com notícias gerais do mundo;
                    {'\n'}• Acesso a categorias temáticas e funções de busca após o login.
                    {'\n\n'}Você concorda em utilizar a plataforma apenas para fins legais, respeitando as regras de convivência, sem publicar conteúdos ofensivos, falsos ou que infrinjam direitos de terceiros.
                </Text>

                <Text className="text-lg font-bold mt-6 mb-2">4. Propriedade Intelectual</Text>
                <Text className="text-base leading-6 text-justify mb-4">
                    Todo o conteúdo disponível na plataforma, incluindo textos, imagens, logotipos e layout, é de propriedade do Diário Digital ou de seus parceiros e está protegido por leis de direitos autorais. É proibida a reprodução, modificação ou distribuição sem autorização expressa.
                </Text>

                <Text className="text-lg font-bold mt-6 mb-2">5. Responsabilidades</Text>
                <Text className="text-base leading-6 text-justify mb-4">
                    O Diário Digital não se responsabiliza por:
                    {'\n\n'}• Informações inverídicas publicadas por fontes externas;
                    {'\n'}• Danos causados por falhas de conexão ou problemas técnicos fora do nosso controle;
                    {'\n'}• Ações de terceiros a partir do conteúdo acessado na plataforma.
                </Text>

                <Text className="text-lg font-bold mt-6 mb-2">6. Suspensão ou Encerramento de Conta</Text>
                <Text className="text-base leading-6 text-justify mb-10">
                    Reservamo-nos o direito de suspender ou encerrar contas que violem estes termos ou utilizem a plataforma de forma inadequada.
                </Text>
            </View>
        </ScrollView>
    );
}

