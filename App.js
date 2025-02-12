import React from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function App() {
  const handlePress = () => {
    Alert.alert(
      "Button Pressed",
      "You have pressed the button!",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
      <TouchableOpacity
        style={tw`bg-blue-500 px-4 py-2 rounded-lg`}
        onPress={handlePress}
      >
        <Text style={tw`text-white font-bold`}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
}