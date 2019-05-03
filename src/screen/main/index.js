import React, { PureComponent } from 'react';
import { StyleSheet, SafeAreaView, Text, TouchableHighlight } from 'react-native';

export default class Main extends PureComponent {

    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
            headerBackTitle: null
        }
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>首页</Text>
                <TouchableHighlight onPress={this._goBack}><Text style={{ color: 'red' }}>go</Text></TouchableHighlight>
            </SafeAreaView>
        );
    }

    _goBack = () => {
        this.props.navigation.navigate('ToastModel');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});