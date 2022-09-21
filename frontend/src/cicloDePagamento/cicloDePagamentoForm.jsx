/* Utilizando a ferramenta do reduxForm, não temos controle total do formulário instanciado,
toda modificação que queremos fazer, teremos que utilizar seus metodos/action creators
 */

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import React, { Component } from "react";
//reduxForm é o equivalente ao "connect"; o Field controla as tags do form
//O componente Field e o metodo handleSubmit so estarão disponível após a ulitização do "reduxForm" como decorator ao componente
//formValueSelector é responsávl por pegar um valor que está dentro do formulário (os valores possiveis podem ser acessados pelo devtools configurado para o redux)
import { reduxForm, Field, formValueSelector } from 'redux-form'

import Sumary from "./listaDeCredito-Debito/Sumary";
import { init } from "./cicloDePagamentoActions";
import LabelAndInput from "../common/form/LabelAndInput";
import ListItens from './listaDeCredito-Debito/ListItens';

class CicloDePagamentoForm extends Component {

    calculateSumary(){
        return {
            //metodo reduce aplica uma função a um array, retornando um unico valor 
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce((t, v) => t + v),
            sumOfDebits: this.props.debits.map(d => +d.value || 0).reduce((t, v) => t + v)
        }
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={LabelAndInput} 
                        type='text' label='Nome' cols='12 4' placeholder='Informe o nome: ' readOnly={this.props.readOnly}/>
                    <Field name='mes' component={LabelAndInput}
                        type='number' label='Mês' cols='12 4' placeholder='Informe o mês: ' readOnly={this.props.readOnly}/>
                    <Field name='ano' component={LabelAndInput}
                        type='number' label='Ano' cols='12 4' placeholder='Informe o ano: ' readOnly={this.props.readOnly}/>

                    <Sumary credit={this.calculateSumary().sumOfCredits} debt={this.calculateSumary().sumOfDebits}/>

                    <ListItens field='credito' legend='Créditos' list={this.props.credits} cols='12 6' readOnly={this.props.readOnly}/>
                    <ListItens showStatus={true} field='debito' legend='Débitos' list={this.props.debits} cols='12 6' readOnly={this.props.readOnly}/>
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type="button" className={`btn btn-${this.props.buttonClass}`} onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}
//seleção dos valores do formulário especifico
const selector = formValueSelector('cicloDePagamentoForm')

//isso trará o array de creditos e colocará à disposição do componente 
const mapStateToProps = state => ({
    credits: selector(state, 'credito'),
    debits: selector(state, 'debito')
})

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
//tag destroyOnUnmount serve para nao perder os dados do formulário. *A248*
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form:'cicloDePagamentoForm', destroyOnUnmount:false})(CicloDePagamentoForm))