import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';

//permite a execução de uma lista de actions creators
import multi from 'redux-multi';
//permite que a action creator, ao inves de retornar diretamente uma action com type e payload,
//retorne uma função que disparará a action
import thunk from 'redux-thunk';
import reducers from './main/reducers'
import promise from "redux-promise";

import Routes from "./main/Routes";

//configuração do devtools do redux
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>
    , document.getElementById('app'))