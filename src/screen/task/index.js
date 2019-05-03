import React, { PureComponent } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default class Task extends PureComponent {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>任务</Text>
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