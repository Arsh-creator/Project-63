import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Read from './screens/Read';
import Write from './screens/Write'

export default class App extends React.Component{
  render(){
  return (
    <AppContainer/>
  );
}
}

const TabNavigator = createBottomTabNavigator({
  ReadStory: {screen: Read},
  WriteStory: {screen: Write},
},
{defaultNavigationOptions: ({navigation})=>({
  tabBarIcon: ({})=>{
    const routeName = navigation.state.routeName
    if(routeName === 'ReadStory'){
      return(
        <Image 
        source={require('./read.png')} />
      );
    } else if(routeName === 'WriteStory'){
      return(
        <Image 
        source={require("./write.png")} />
      );
    }
  }
})}
);

const AppContainer = createAppContainer(TabNavigator);