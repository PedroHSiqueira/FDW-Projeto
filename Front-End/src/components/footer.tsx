import React from "react";
import { Image, TouchableOpacity, View, Text, Button } from "react-native";
import tw from "twrnc";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Footer() {
    return (
        <View className="mt-10 flex-row p-8 bg-slate-200 rounded-3xl justify-evenly">
            <TouchableOpacity style={tw`text-black text-lg font-bold flex flex-col items-center`} onPress={() => {}}>
                <Icon name="globe" size={24} color="black"/>
                <Text>Mundo</Text> 
            </TouchableOpacity>

            <TouchableOpacity style={tw`text-black text-lg font-bold items-center`}>
                <Icon name="home" size={24} color="black" />
                <Text>Inicio</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={tw`text-black text-lg font-bold items-center`}>
                <Icon name="reorder" size={24} color="black" />
                <Text>Menu</Text> 
            </TouchableOpacity>
        </View>
    );
}
