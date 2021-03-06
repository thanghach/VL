import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
// import Route from './Route';
import Main from './Main.bk';
import Reducers from './reducers';

class App extends Component {

    render() {
        // const store = createStore(Reducers, {}, applyMiddleWare(ReduxThunk));
        const store = createStore(Reducers, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}

export default App;
