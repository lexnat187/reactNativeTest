'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
  Image,
} from 'react-native';
import Button from 'react-native-button';
import ImagePicker from 'react-native-image-crop-picker';

export default class SearchPage extends Component<{}> {
  
  _handlePress() {
    console.log('Pressed!');
  }
  
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.description}>
            Search for houses to buy!
          </Text>
          <Text style={styles.description}>
            Search by place-name or postcode.
          </Text>
          <Button
            style={{fontSize: 20, color: 'green'}}
            styleDisabled={{color: 'red'}}
            onPress={() => this._handlePress()}>
            Press Me!
          </Button>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    description: {
      marginBottom: 20,
      fontSize: 18,
      textAlign: 'center',
      color: '#656565'
    },
    container: {
      padding: 30,
      marginTop: 65,
      alignItems: 'center'
    },
  });