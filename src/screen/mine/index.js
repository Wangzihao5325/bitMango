import React, { PureComponent } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

export default class Mine extends PureComponent {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>我的</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});