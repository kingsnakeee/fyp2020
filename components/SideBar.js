import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

export default SideBar = props => (
    <ScrollView>
        <ImageBackground
            source={require("../assets/Foggy-forest-nature-hd-wallpapers.jpg")}
            style={{ width: undefined, padding: 16, paddingTop: 48 }}
        >
            <Image source={require("../assets/STHE-logo-2.png")} style={styles.profile} />
            <Text style={styles.name}>Shell & Tube Heat Exchanger Designer</Text>

            <View style={{ flexDirection: "row" }}>
                <Text style={styles.followers}>created by NTU undergrad</Text>
            </View>
        </ImageBackground>

        <View style={styles.container} forceInset={{ top: "always", horizontal: "never" }}>
            <DrawerNavigatorItems {...props} />
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "#FFF"
    },
    name: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "800",
        marginVertical: 8
    },
    followers: {
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: 13,
        marginRight: 4
    }
});
