import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  StyleSheet,
} from "react-native";
import bmwx6 from "./assets/bmwx6.jpg";

const App = () => {
  const [name, setName] = useState("");
  const handleChange = (text) => {
    setName(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.title}>"Korkor's First Mobile App</Text>
      <Text style={{ fontsize: 40, fontWeight: "bold" }}>
        Welcome to My First Mobile App
      </Text>
      <Image
        source={bmwx6}
        style={{ height: 400, width: 300, resizeMode: "contain" }}
      />

      <View>
        <TouchableOpacity>
          <Text>Buy Me</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={{ borderWidth: 1, width: "100%" }}
        value={name}
        onChangeText={handleChange}
      />
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lavender",
  },

  title: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
  },
});

// const App = () => {
//   return (
//     <View>
//       <Text>"Korkor's First Mobile App"</Text>
//     </View>
//   );
// };
