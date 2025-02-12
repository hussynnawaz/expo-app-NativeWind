// import { View, Text,Button,SafeAreaView } from 'react-native'
// import React from 'react'
// import { useNavigation } from '@react-navigation/native'
// const home = () => {
//   const navigation = useNavigation();
//   return (
//     <SafeAreaView className="flex-1 justify-center items-center">
//       <ButtonComponent title="Press Me" onPress={handlePress} />
//     </SafeAreaView>
    
//   )
// }

// export default home
import { View, Text, Button, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button as ButtonComponent } from 'react-native'; // Ensure you import the Button component correctly.

const Home = () => {
  const navigation = useNavigation();

  // Define your handlePress function
  const handlePress = () => {
    // You can use the navigation to go to other screens if needed
    console.log("Button pressed");
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-blue-50">
      <View className="bg-white p-6 rounded-lg shadow-md">
        <Text className="text-xl font-semibold text-center mb-4">Welcome to the Home Page</Text>
        <ButtonComponent 
          title="Press Me" 
          onPress={handlePress}
          color="#4CAF50" // Button color
          className="w-full py-3 rounded-lg" // Styling for the button
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
