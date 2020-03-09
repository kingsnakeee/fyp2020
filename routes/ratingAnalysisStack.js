import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
// import About from '../screens/about';
import RatingAnalysis from '../components/RatingAnalysis'

const screens = {
  RatingAnalysis: {
    screen: RatingAnalysis,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Rating Analysis' navigation={navigation} />
      }
    },
  },
}

const RatingAnalysisStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default RatingAnalysisStack;