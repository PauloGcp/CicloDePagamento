import React from "react";
import {Router, Route, Redirect, hashHistory} from 'react-router'

import DashBoard from "../dashboard/DashBoard";
import cicloDePagamento from "../cicloDePagamento/CicloDePagamento";
import DashboardW_R from './../dashboardWithoutRedux/DashboardW_R';

export default props =>{
    return(
        <Router history={hashHistory}>
            <Route path='/' component={DashBoard}/>
            <Route path='/withoutRedux' component={DashboardW_R}/>
            <Route path='/cicloDePagamento' component={cicloDePagamento}/>
            <Redirect from='*' to='/'/>
        </Router>
    )
}