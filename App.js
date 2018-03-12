import React, { Component } from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import codePush from 'react-native-code-push';

const codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

const image = require('./images/qa.png');

class MyApp extends Component {

    onButtonPress() {
        codePush.sync({
            updateDialog: true,
            installMode: codePush.InstallMode.IMMEDIATE
        });
    }

    render() {
        const { buttonStyle, imageStyle, textStyle, viewStyle } = styles;
        return (
                <View style={viewStyle}>
                    <Image style={imageStyle} source={image} />
                    <TouchableOpacity style={buttonStyle} onPress={this.onButtonPress}>
                        <Text style={textStyle}>Check for updates</Text>
                    </TouchableOpacity>
                </View>
        );
    }
}

MyApp = codePush(codePushOptions)(MyApp);

export default MyApp;

const retrieverColour = '#9E1E30';

const styles = {
    viewStyle: {
        flex: 1,
        alignItems: 'center',
    },
    imageStyle: {
    },
    textStyle: {  
      alignSelf: 'center',
      color: retrieverColour,
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
    },
    buttonStyle: {
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: retrieverColour,
      marginLeft: 5,
      marginRight: 5
    }
  };
