import React, { Component } from 'react';
import { 
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import codePush from 'react-native-code-push';
import { Provider as PaperProvider } from 'react-native-paper';

const codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

class MyApp extends Component {
    onButtonPress() {
        codePush.sync({
            updateDialog: true,
            installMode: codePush.InstallMode.IMMEDIATE
        });
    }

    render() {
        return (
            <PaperProvider>
                <View>
                    <Title>Hello App Center</Title>
                    <TouchableOpacity onPress={this.onButtonPress}>
                        <Text>Check for updates</Text>
                    </TouchableOpacity>
                </View>
            </PaperProvider>
        );
    }
}

MyApp = codePush(codePushOptions)(MyApp);

export default MyApp;
