import { NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

function nowRouter() {
    let routes = _navigator.state.nav.routes;
    let nowRouter = routes[routes.length - 1];
    return nowRouter.routeName;
}

export default {
    navigate,
    setTopLevelNavigator,
    nowRouter
};