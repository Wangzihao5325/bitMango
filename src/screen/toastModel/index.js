import React, { PureComponent } from 'react';
import { StyleSheet, SafeAreaView, TouchableHighlight, Text } from 'react-native';

export default class ToastModel extends PureComponent {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text onPress={this._goBack} style={{ color: 'red' }}>back</Text>
            </SafeAreaView>
        );
    }

    _goBack = () => {
        this.props.navigation.goBack();
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center'
    }
});