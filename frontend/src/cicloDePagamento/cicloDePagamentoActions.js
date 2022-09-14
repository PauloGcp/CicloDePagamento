import axios from "axios";
import { toastr } from 'react-redux-toastr';
import { initialize} from 'redux-form';
import { selectTab, showTabs } from "../common/tab/tabActions";

const BASE_URL = 'http://localhost:3003/api'
//o objeto vazio zera todos os campos
const INITIAL_VALUES = {}

export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycle`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function deletee(values){
    return submit(values, 'delete')
}

function submit(values, method) {
    //utilizaçao do redux-thunk.
    return dispatch => {
        // o id representará o proprio id gerado pelo mongo ou uma string vazia
        const id = values._id ? values._id : ''
        //uma forma interessante de se chamar um parametro que servirá como função
        axios[method](`${BASE_URL}/billingCycle/${id}`, values)
            .then(res => {
                //'toastr' é a ferramenta para a mensagem de erro ou sucesso (foi configurado na pasta 'msg')
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                dispatch(init())
            })
            .catch(err => {
                //array de errors foi definido no backend
                err.response.data.errors.forEach(error => toastr.error('Error:', error))
            })
    }
}

export function showUpdtate(cicloDePagamento){
    return [
            showTabs('tabUpdate'),
            selectTab('tabUpdate'),
            //inicia o formulário ja com os dados que chegaram de acordo com o objeto do parametro
            initialize('cicloDePagamentoForm', cicloDePagamento)
    ]
}

export function showDelete(cicloDePagamento){
    return [
            showTabs('tabDelete'),
            selectTab('tabDelete'),
            initialize('cicloDePagamentoForm', cicloDePagamento)
    ]
}

//define o cadastro inicial. Foi feito como uma forma de "substituição" para uma possivel action de 'cancelar'.
//Também resolve o 'problema' do destroyOnUnmount do Form
export function init(){
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('cicloDePagamentoForm', INITIAL_VALUES)
    ]
}