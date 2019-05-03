import React from 'react';
import { createStackNavigator } from 'react-navigation';

//首页
import Main from '../screen/main/index';

//书架
import Collection from '../screen/collection/index';

//任务
import Task from '../screen/task/index';

//我的
import Mine from '../screen/mine/index';

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
};