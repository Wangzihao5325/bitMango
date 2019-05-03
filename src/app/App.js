import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

//导航模块
import { createAppContainer } from 'react-navigation';
import { RootRouter } from '../app/Register';
import NavigationService from './NavigationService';

//redux
import { Provider } from 'react-redux';
import store from '../store/index';

const AppContainer = createAppContainer(RootRouter);

export default class App extends PureComponent {

    render() {
        return (
            <Provider store={store}>
                <AppContainer
                    ref={
                        navigatorRef => {
                            NavigationService.setTopLevelNavigator(navigatorRef);
                        }
                    }
                />
            </Provider>
        );
    }

}