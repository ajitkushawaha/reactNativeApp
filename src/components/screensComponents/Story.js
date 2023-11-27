import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import {useNavigation} from "@react-navigation/native"
const Story = () => {

  const navigation = useNavigation()

  storyInfo = [
    {
      id: 1,
      name: "your story",
      image: require("../../components/storage/image/userProfile.jpg"),
    },
    {
      id: 0,
      name: "Jogender",
      image: require("../../components/storage/image/gajju.jpg"),
    },
    {
      id: 0,
      name: "Niks",
      image: require("../../components/storage/image/niks.jpg"),
    },
    {
      id: 0,
      name: "shradha",
      image: require("../../components/storage/image/shradha.jpg"),
    },
    {
      id: 0,
      name: "momina",
      image: require("../../components/storage/image/momina.jpg"),
    },
    {
      id: 0,
      name: "shradha",
      image: require("../../components/storage/image/shradha.jpg"),
    },
  ];
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ padding: 20 }}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity key={index} 
             onPress={() => navigation.push('Status')}>
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 8,
                position: "relative",
              }}>
              {data.id = 0 ? [
                  <View
                    style={{
                      position: "absolute",
                      bottom: 10,
                      right: 10,
                      zIndex: 1,
                    }}>
                    <Entypo
                      name="circle-with-plus"
                      style={{
                        fontSize: 20,
                        color: "#405de6",
                        backgroundColor: "white",
                        borderRadius: 100,
                      }}
                    />
                  </View>
                ] : null}
              <View 
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: "white",
                  borderWidth: 1.6,
                  borderRadius: 100,
                  borderColor: "#c13584",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={data.image}
                  style={{
                    resizeMode: "cover",
                    width: "92%",
                    height: "92%",
                    borderRadius: 100,
                    backgroundColor: "orange",
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 10,
                  opicity: data.id == 0 ? 1 : 0.5,
                }}
              >
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Story;


