import React, { Component } from 'react';
import { Image, View } from 'react-native';
import codePush from 'react-native-code-push';
import { Button, Header } from 'react-native-elements';

const codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

// change image and colour and the redeploy using 'appcenter codepush release-react'

const image = require('./images/qa.png');

const colour = '#9E1E30';
        
class MyApp extends Component {

    onButtonPress() {
        codePush.sync({
            updateDialog: true,
            installMode: codePush.InstallMode.IMMEDIATE
        });
    }

    render() {
        return (
                <View style={{ flex: 1 }}>
                    <Header
                        centerComponent={{
                            text: 'Hello App Center',
                            style: {
                                color: '#fff',
                                fontSize: 30 
                            } 
                        }}
                        backgroundColor={colour}
                    />
                    <View 
                        style={{
                            flex: 1,
                            alignItems: 'center' 
                        }}
                    >
                        <Image source={image} />
                        <Button 
                            large
                            title='Check for updates'
                            onPress={this.onButtonPress}
                            backgroundColor={colour}
                        />
                    </View>
                </View>
        );
    }
}

MyApp = codePush(codePushOptions)(MyApp);

export default MyApp;
