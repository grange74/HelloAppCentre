import React, { Component } from 'react';
import { Image, View } from 'react-native';
import codePush from 'react-native-code-push';
import { Button, Header } from 'react-native-elements';

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
        const rcColour = '#9E1E30';
        return (
                <View style={{ flex: 1 }}>
                    <Header
                        centerComponent={{ text: 'Hello App Center', style: { color: '#fff', fontSize: 30 } }}
                        backgroundColor={rcColour}
                    />
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Image source={image} />
                        <Button 
                            large
                            title='Check for updates'
                            onPress={this.onButtonPress}
                            backgroundColor={rcColour}
                        />
                    </View>
                </View>
        );
    }
}

MyApp = codePush(codePushOptions)(MyApp);

export default MyApp;
