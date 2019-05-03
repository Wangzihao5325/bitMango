import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

//首页
import Main from '../screen/main/index';

//书架
import Collection from '../screen/collection/index';

//任务
import Task from '../screen/task/index';

//我的
import Mine from '../screen/mine/index';

//toast
import ToastModel from '../screen/toastModel/index';

/**
 * 主页router
 */
let MainStack = createStackNavigator(
    {
        Main
    },
    {
        navigationOptions: { gesturesEnabled: false }
    }
);

MainStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarLabel: '首页',
        tabBarVisible,
        tabBarIcon: ({ focused, tintColor }) => {
            if (focused) {
                return (
                    <Icon name="rocket" size={30} color="#900" />
                );
            }
            return (
                <Icon name="rocket" size={30} color="yellow" />
            )
        }
    }
};

/**
 * 书架router
 */
let CollectionStack = createStackNavigator(
    {
        Collection
    },
    {
        navigationOptions: { gesturesEnabled: false }
    }
);

CollectionStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarLabel: '书架',
        tabBarVisible,
        tabBarIcon: ({ focused, tintColor }) => {
            if (focused) {
                return (
                    <Icon name="rocket" size={30} color="#900" />
                );
            }
            return (
                <Icon name="rocket" size={30} color="yellow" />
            )
        }
    }
};

/**
 * 任务router
 */
let TaskStack = createStackNavigator(
    {
        Task
    },
    {
        navigationOptions: { gesturesEnabled: false }
    }
);

TaskStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarLabel: '任务',
        tabBarVisible,
        tabBarIcon: ({ focused, tintColor }) => {
            if (focused) {
                return (
                    <Icon name="rocket" size={30} color="#900" />
                );
            }
            return (
                <Icon name="rocket" size={30} color="yellow" />
            )
        }
    }
};

/**
 * 我的router
 */
let MineStack = createStackNavigator(
    {
        Mine
    },
    {
        navigationOptions: { gesturesEnabled: false }
    }
);

MineStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarLabel: '我的',
        tabBarVisible,
        tabBarIcon: ({ focused, tintColor }) => {
            if (focused) {
                return (
                    <Icon name="rocket" size={30} color="#900" />
                );
            }
            return (
                <Icon name="rocket" size={30} color="yellow" />
            )
        }
    }
};

/**
 * tab router
 */
let BottomTab = createBottomTabNavigator(
    {
        MainStack,
        CollectionStack,
        TaskStack,
        MineStack
    },
    {
        tabBarOptions: {
            activeTintColor: 'rgb(254,163,91)',
            style: {
                backgroundColor: 'rgb(51,57,62)',
            }
        }
    }
);

let RootRouter = createStackNavigator(
    {
        Main: {
            screen: BottomTab
        },
        ToastModel
    },
    {
        mode: 'modal',
        headerMode: 'none',
        transparentCard: true,
        cardStyle: {
            opacity: 1.0  // makes transparentCard work for android
        },
    }
);

export {
    RootRouter
};