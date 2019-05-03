import React, { PureComponent } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

export default class Main extends PureComponent {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>首页</Text>
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