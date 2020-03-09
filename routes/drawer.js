import React, { Component } from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { Dimensions } from "react-native";

// stacks
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import RatingAnalysisStack from "./ratingAnalysisStack";
import SizingAnalysisStack from "./sizingAnalysisStack";

import { Feather } from "@expo/vector-icons";

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Feather name="user" size={16} color={tintColor} />
      )
    }
  },
  About: {
    screen: AboutStack,
    navigationOptions: {
      title: "Guide",
      drawerIcon: ({ tintColor }) => (
        <Feather name="message-square" size={16} color={tintColor} />
      )
    }
  },
  RatingAnalysis: {
    screen: RatingAnalysisStack,
    navigationOptions: {
      title: "Rating Analysis",
      drawerIcon: ({ tintColor }) => (
        <Feather name="activity" size={16} color={tintColor} />
      )
    }
  },
  SizingAnalysis: {
    screen: SizingAnalysisStack,
    navigationOptions: {
      title: "Sizing Analysis",
      drawerIcon: ({ tintColor }) =>
        <Feather name="list" size={16} color={tintColor} />
    }
  }
},
{
  contentComponent: props => <SideBar {...props} />,
          drawerWidth: Dimensions.get("window").width * 0.85,
          hideStatusBar: true,
  
          contentOptions: {
              activeBackgroundColor: "rgba(212,118,207, 0.2)",
              activeTintColor: "#53115B",
              itemsContainerStyle: {
                  marginTop: 16,
                  marginHorizontal: 8
              },
              itemStyle: {
                  borderRadius: 4
              }
          }
}
)

export default createAppContainer(RootDrawerNavigator);
