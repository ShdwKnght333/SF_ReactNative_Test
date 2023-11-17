import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImageViewer from './Components/imageViewer';
import Button from './Components/button';

const SFImage = require('./assets/SFimage.png')

function HomeScreen({ navigation}) {
  const loginPressed = () => {
    navigation.navigate('Login');
    console.log("Button Pressed")
  }
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer imageShown={SFImage} />
        </View>
        <Button label="Login" method={loginPressed}/>
        <Text style={{ color: '#000' }}>Click the above button to log into a Sharefile Account</Text>
        <StatusBar style="auto" />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#10EAD2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer: {
      // flex: 1,
      paddingTop: 58,
    },
  });

export default HomeScreen;