import './main.scss';

import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, createStore} from "redux";
import {createBrowserHistory} from "history";
import thunk from "redux-thunk";
import {routerMiddleware, ConnectedRouter} from "connected-react-router";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";

import createRootReducer from "reducers";
import routes from "./node_modules/routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];
const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares)),
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {routes}
        </ConnectedRouter>
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
        />
    </Provider>,
    document.getElementById('root')
);
