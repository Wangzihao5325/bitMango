import React, { PureComponent } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

export default class Collection extends PureComponent {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>书架</Text>
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