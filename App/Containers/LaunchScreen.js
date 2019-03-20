import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js';

import { Images } from '../Themes';
import { Button } from 'react-native-elements';


// Styles
import styles from './Styles/LaunchScreenStyles';

import { RNCamera } from 'react-native-camera';
import RNExitApp from 'react-native-exit-app';
import QRCodeScanner from 'react-native-qrcode-scanner';
import QRCode from 'react-native-qrcode-svg';

export default class LaunchScreen extends Component {

  componentDidMount=()=>{

      console.log('===============path=====================');
      console.log(RNCamera);

      const RNFS = require('react-native-fs');
      console.log(RNFS);

      console.log(QRCodeScanner);

      console.log('===============path=====================');

      setTimeout(()=>{
          RNExitApp.exitApp();
      }, 3000);
  }

  render () {
      return (
          <View style={styles.mainContainer}>
              <Button style={[styles.centered, {backgroundColor:'cyan'}]}/>
              <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
              <ScrollView style={styles.container}>

              </ScrollView>

          </View>
      );
  }
}
