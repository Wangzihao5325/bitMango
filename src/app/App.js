import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { RootRouter } from '../app/Register';
import NavigationService from './NavigationService';

const AppContainer = createAppContainer(RootRouter);

export default class App extends PureComponent {

    render() {
        return (
            <AppContainer
                ref={
                    navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }
                }
            />
        );
    }

}