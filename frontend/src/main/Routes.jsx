import React from "react";
import {Router, Route, Redirect, IndexRoute, hashHistory} from 'react-router'

import DashBoard from "../dashboard/DashBoard";
import CicloDePagamento from "../cicloDePagamento/CicloDePagamento";
import DashboardW_R from './../dashboardWithoutRedux/DashboardW_R';
import AppOrAuth from "./AppOrAuth";

export default props =>{
    return(
        <Router history={hashHistory}>
            <Route path='/' component={AppOrAuth}>
                {/**Rota Padrão */}
                <IndexRoute component={DashBoard}/>
                <Route path='withoutRedux' component={DashboardW_R}/>
                <Route path='cicloDePagamento' component={CicloDePagamento}/>
            </Route>
            <Redirect from='*' to='/'/>
        </Router>
    )
}