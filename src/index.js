import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
// Redux 
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login';
import LoadingComponent from './components/LoadingComponent'
import AuthenticatedComponents from './components/AuthenticatedComponents'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <LoadingComponent>
            <div>
                <Navbar/>
                <Switch>
                        <AuthenticatedComponents>
                        <Route exact path="/" component={App} />
                    </AuthenticatedComponents>
                    <Route exact path="/login" component={Login}/>
                </Switch>
            </div>
            </LoadingComponent>
            
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
