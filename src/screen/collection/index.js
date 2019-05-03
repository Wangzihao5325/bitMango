import React, { PureComponent } from 'react';
import { StyleSheet, SafeAreaView, Text, TouchableHighlight } from 'react-native';
import store from '../../store/index';
import { connect } from 'react-redux';
import { test_add, test_min } from '../../store/action/TestAction';

class Collection extends PureComponent {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>书架</Text>
                <TouchableHighlight onPress={this._plus}><Text>+</Text></TouchableHighlight>
                <Text>{this.props.data}</Text>
                <TouchableHighlight onPress={this._min}><Text>-</Text></TouchableHighlight>
            </SafeAreaView>
        );
    }

    _plus = () => {
        store.dispatch(test_add());
    }

    _min = () => {
        store.dispatch(test_min());
    }

}

function mapState2Props(store) {
    return {
        data: store.test.num,
    }
}

export default connect(mapState2Props)(Collection);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});