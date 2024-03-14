import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
// import User_Tab from "../components/User_Tab";
// import Header from "../../components/Header";
import HeaderTap from "../../components/HeaderTab"
// import Reception from "../components/Reception";
import WelcomeMessage from "../../components/WelcomeMessage";
// import Chosing from "../components/Chosing";
import Services from "../../components/Services";
// import Ads_Card from "../components/Ads_Card";
import Ads_Card from "../../components/Ads_Card";
import Menu from "../../components/Menu";
const HomeClient = ({ navigation }) => {
  return (
    <Menu navigation={navigation}>
      
    <View className="flex-1 bg-white items-center px-4">
      <HeaderTap/>
      <ScrollView
        vertical
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <WelcomeMessage />
        <Services navigation={navigation} />
        <View
          style={{ width: "100%", marginBottom: 170 }}
          className="flex-column h-40 justify-between"
        >
          <Ads_Card
            icon={require("../../../assets/imageApp/car-service.png")}
            imgUrl={require("../../../assets/imageApp/ads1.png")}
            title="Thanks to you"
            subTitle="We thank you for your trust"
            short_descrption="Depenage Dz has been voted product of the year 2024"
          />
        </View>
        <View
          style={{ marginBottom: 140 }}
          className="flex-column w-full h-40 justify-between"
        >
          <Ads_Card
            icon={require("../../../assets/imageApp/car-service.png")}
            imgUrl={require("../../../assets/imageApp/ads1.png")}
            title="Thanks to you"
            subTitle="We thank you for your trust"
            short_descrption="Depenage Dz has been voted product of the year 2024"
          />
        </View>
        <View
          style={{ marginBottom: 180 }}
          className="flex-column w-full h-40 justify-between"
        >
          <Ads_Card
            icon={require("../../../assets/imageApp/car-service.png")}
            imgUrl={require("../../../assets/imageApp/ads1.png")}
            title="Thanks to you"
            subTitle="We thank you for your trust"
            short_descrption="Depenage Dz has been voted product of the year 2024"
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
    </Menu>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    width: "100%",
    flexDirection: "column",
    paddingTop: 12,
    paddingHorizontal: 15,
  },
});

export default HomeClient;
