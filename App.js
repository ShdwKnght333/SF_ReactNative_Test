import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginWebView from './loginView'
import HomeScreen from './homeScreen'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home" 
          component={HomeScreen}
        />
        <Stack.Screen
          name="Login"
          component={LoginWebView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default class App extends Component {
//   render() {
//     return <AppContainer />;
//   }
// }

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   },
//   About: {
//     screen: AboutScreen
//   }
// });
// const AppContainer = createAppContainer(AppNavigator);


