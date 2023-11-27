import React from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Story from "../screensComponents/Story";

const Home = () => {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <StatusBar
        backgroundColor="teal"
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 15,
        }}
      >
        <FontAwesome name="plus-square-o" style={{ fontSize: 22 }} />
        <Text style={{ fontSize: 22, fontWeight: "500", padding: 5 }}>
          instagram
        </Text>
        <Feather name="navigation" style={{ fontSize: 24 }} />
      </View>

      <ScrollView>
        <Story/>
      </ScrollView>
    </View>
  );
};


export default Home;
