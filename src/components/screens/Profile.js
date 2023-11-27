import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { Link, useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";

const Profile = () => {
  const navigation = useNavigation();
  const profileInfo = {
    id: 1,
    name: "Ajit Kushwaha",
    pic: require("../../components/storage/image/userProfile.jpg"),
    post: "222",
    followers: "200",
    follow: "201",
  };

  return (
    <ScrollView style={styles.profile}>
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>ajit.react</Text>
        <TouchableOpacity
          onPress={() => console.log("Add pressed")}
          style={styles.navRight}
        >
          <FontAwesome name="plus-square-o" color="white" size={30} />
          <Icon name="menu-outline" size={28} color="white" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.pContainer}>
          <View style={styles.profileIt}>
            <TouchableOpacity style={styles.profileContainer} onPress={() => navigation.push("Status")}>
              <Image
                style={styles.profileImage}
                source={profileInfo.pic}
                
              />
            </TouchableOpacity>
            <Text style={styles.profileText}>{profileInfo.name}</Text>
          </View>
          <View>
            <Text style={styles.profileText}>{profileInfo.post}</Text>
            <Text style={styles.profileText}>Posts</Text>
          </View>
          <View>
            <Text style={styles.profileText}>{profileInfo.followers}</Text>
            <Text style={styles.profileText}>Followers</Text>
          </View>
          <View>
            <Text style={styles.profileText}>{profileInfo.follow}</Text>
            <Text style={styles.profileText}>Following</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.profileIfo}>
        <Text>Login in the word 15 june</Text>
        <Text>Simpal Boy</Text>
        <Text>Nature lover</Text>
        <Text>
          {" "}
          hellow my name is Ajit and i am any where and noithing thios is native
          project{" "}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profile: {
    backgroundColor: "black",
    color: "white",
  },
  navbar: {
    paddingTop: 10,
    flexDirection: "row",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navbarText: {
    fontSize: 20,
    fontWeight: "500",
    padding: 5,
    color: "white",
  },

  navRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "25%",
  },
  pContainer: {
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  profileIt: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  profileContainer: {
    marginTop: 10,
    width: 68,
    height: 68,
    backgroundColor: "black",
    borderWidth: 1.6,
    borderRadius: 100,
    borderColor: "#c13584",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    resizeMode: "cover",
    width: "92%",
    height: "92%",
    borderRadius: 100,
    backgroundColor: "orange",
  },
  profileText: {
    textAlign: "center",
    fontSize: 15,
    opicity: 0.5,
    color: "white",
  },
  profileIfo: {
    color: "white",
  },
});
export default Profile;
