import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking, useWindowDimensions } from 'react-native';

const desenvolvedores = [
    {
        name: 'Pedro Lima',
        role: 'Líder Front-End',
        image: require('../../public/PedroLima.jpg'),
        linkedin: 'https://www.linkedin.com/in/upedrolima/',
    },
    {
        name: 'Vitor Macedo',
        role: 'Front-End',
        image: require('../../public/1.jpg'),
        linkedin: 'https://www.linkedin.com/in/vitormacedoo/',
    },
    {
        name: 'Pedro Siqueira',
        role: 'Líder Back-end',
        image: require('../../public/5.jpg'),
        linkedin: 'https://www.linkedin.com/in/phasiqueira/',
    },
    {
        name: 'Vicenzo Goulart',
        role: 'Back-End',
        image: require('../../public/3.jpg'),
        linkedin: 'https://www.linkedin.com/in/@vicenzo-goulart/',
    },
    {
        name: 'Marcelo Lemes',
        role: 'Front-End',
        image: require('../../public/4.jpg'),
        linkedin: 'https://www.linkedin.com/in/marcelonuneslemes/',
    },
    {
        name: 'Wagner Loch',
        role: 'Professor do Curso',
        image: require('../../public/6.jpg'),
        linkedin: 'https://www.linkedin.com/in/wagnerloch/',
    },
];

export default function Desenvolvedores() {
    const { width } = useWindowDimensions();

    const LarguraCard = () => {
        if (width < 500) return 'w-full';
        if (width < 768) return 'w-[48%]';
        return 'w-[30%]';
    };

    const imageHeight = width < 500 ? 140 : 180;

    return (
        <ScrollView className="flex-1 p-5 mt-10">
            <Text className="text-2xl text-black font-black text-center my-5">Equipe do Projeto</Text>
            <View className="flex-row bg-[#094067] px-10 py-12 rounded-xl flex-wrap justify-between">
                {desenvolvedores.map((dev, index) => (
                    <View
                        key={index}
                        className={`${LarguraCard()} bg-[#1c1c1e] rounded-2xl p-4 mb-5 items-center shadow-lg shadow-black`}
                    >

                        <Text className="text-white text-lg font-semibold text-center mb-3">{dev.role}</Text>
                        <Image
                            source={dev.image}
                            className="rounded-xl object-cover object-top mt-2"
                            style={{
                                width: width < 500 ? 130 : width < 768 ? 180 : 220,
                                height: width < 500 ? 180 : width < 768 ? 240 : 260,
                            }}
                        />
                        <Text
                            className="text-lg font-bold text-white text-center mb-2 mt-4"
                            onPress={() => Linking.openURL(dev.linkedin)}
                        >
                            {dev.name}
                        </Text>
                    </View>
                ))}
            </View>
            <View className='mt-10'></View>
        </ScrollView>
    );
}
