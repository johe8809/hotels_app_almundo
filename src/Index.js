import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import Routes from './config/routes';
import getStore from './stores/store.js';

const Navigation = StackNavigator(Routes, {
    headerMode: 'screen'
});

const reducer = (state, action) => {
    const newState = Navigation.router.getStateForAction(action, state);
    return newState || state;
}

class App extends Component {
    render() {
        return (
            <Navigation
                navigation = {addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        )
    }
}

const store = getStore(reducer);

const AppIndex = connect(state => ({nav: state.nav}))(App);

export default Index = () => {
    return (
        <Provider store={store}>
            <AppIndex />
        </Provider>
    )
};
