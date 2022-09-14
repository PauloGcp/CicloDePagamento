import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import tabReducer from "../common/tab/tabReducer";
import dashBoardReducer from "../dashboard/dashBoardReducer";
import cicloDePagamentoReducer from "../cicloDePagamento/cicloDePagamentoReducer";

const rootReducer = combineReducers({
    dashboard: dashBoardReducer,
    tab: tabReducer,
    cicloDePagamento: cicloDePagamentoReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer