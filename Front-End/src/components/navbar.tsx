import React from "react";
import { Button, Image, TouchableOpacity, View, Text } from "react-native";
import tw from "twrnc";
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function Navbar() {
    return (
        <View style={tw`flex-row p-8 shadow-lg bg-white justify-between`}>
            <Image
            source={require("../../public/logo.png")}
            style={tw`w-14 h-14`} 
            />
            <View style={tw`flex-1 items-center justify-center`}>
            <TouchableOpacity
                style={tw`bg-white px-4 py-1 ml-3 rounded-full border-[3px] border-[#101829]`}
                onPress={() => window.location.href = "/login/page.tsx"}
            >
                <Text style={tw`text-black text-sm font-bold`}>
                <Icon name="search" size={20} color="#000" /> Buscar
                </Text>
            </TouchableOpacity>
            </View>
            <View style={tw`flex-1 items-center justify-center`}>
            <TouchableOpacity
                style={tw`bg-white px-4 ml-3 py-1 rounded-full border-[3px] border-[#101829]`}
                onPress={() => window.location.href = "/login/page.tsx"}
            >
                <Text style={tw`text-black text-sm font-bold`}>
                    Entrar Agora
                </Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}
