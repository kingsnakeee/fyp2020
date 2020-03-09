import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import SizingAnalysis from '../components/SizingAnalysis';

const screens = {
  SizingAnalysis: {
    screen: SizingAnalysis,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Sizing Analysis' navigation={navigation} />
      }
    },
  },
}

const SizingAnalysisStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default SizingAnalysisStack;