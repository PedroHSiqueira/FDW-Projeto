import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function PoliticaPrivacidade() {
    return (
        <ScrollView className="flex-1 bg-[#f9f4ef] px-5 py-6 lg:px-0">
            <Text className="text-2xl font-bold text-center mb-5 mt-5">Política de Privacidade</Text>

            <Text className="text-base leading-6 text-justify text-black lg:max-w-[800px] lg:mx-auto lg:px-5">
                A sua privacidade é muito importante para nós. No Diário Digital, temos o compromisso de proteger todas as informações fornecidas pelos nossos usuários e garantir total transparência sobre como os dados são coletados, utilizados e armazenados.{"\n\n"}

                <Text className="font-bold text-black">Coleta de Informações{"\n"}</Text>
                Coletamos informações pessoais somente quando necessário para fornecer uma experiência completa ao usuário. Isso pode incluir:{"\n"}
                - Nome e e-mail no momento do cadastro.{"\n"}
                - Dados de navegação, como páginas acessadas e tempo de uso, com o objetivo de melhorar a usabilidade da plataforma.{"\n\n"}

                <Text className="font-bold text-black">Uso das Informações{"\n"}</Text>
                As informações coletadas são utilizadas exclusivamente para:{"\n"}
                - Permitir o acesso a funcionalidades restritas após login.{"\n"}
                - Personalizar o conteúdo e sugestões de notícias de acordo com o interesse do usuário.{"\n"}
                - Melhorar continuamente a experiência da plataforma.{"\n"}
                Jamais vendemos ou compartilhamos suas informações pessoais com terceiros.{"\n\n"}

                <Text className="font-bold text-black">Armazenamento e Segurança{"\n"}</Text>
                Todos os dados são armazenados de forma segura, utilizando boas práticas de desenvolvimento e criptografia. Apenas profissionais autorizados têm acesso a essas informações, e sempre com o objetivo de garantir a integridade e a confidencialidade dos dados.{"\n\n"}

                <Text className="font-bold text-black">Cookies{"\n"}</Text>
                Utilizamos cookies para melhorar a navegação no site, armazenar preferências de idioma e manter o login ativo. O usuário pode, a qualquer momento, configurar seu navegador para recusar o uso de cookies, porém algumas funcionalidades da plataforma poderão ser limitadas.{"\n\n"}

                <Text className="font-bold text-black">Direitos do Usuário{"\n"}</Text>
                Você pode, a qualquer momento:{"\n"}
                - Solicitar acesso aos seus dados.{"\n"}
                - Corrigir ou atualizar informações pessoais.{"\n"}
                - Solicitar a exclusão permanente da sua conta e dos dados associados.{"\n\n"}

                <Text className="font-bold text-black">Alterações nesta Política{"\n"}</Text>
                A Política de Privacidade pode ser atualizada periodicamente. Sempre que houver mudanças significativas, notificaremos os usuários pela própria plataforma.{"\n\n"}

                <Text className="font-bold text-black">Contato{"\n"}</Text>
                Em caso de dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados, entre em contato conosco pelo e-mail: contato@diariodigital.com
            </Text>
        </ScrollView>
    );
}
