/* Utilizando a ferramenta do reduxForm, não temos controle total do formulário instanciado,
toda modificação que queremos fazer, teremos que utilizar seus metodos/action creators
 */

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import React, { Component } from "react";
//reduxForm é o equivalente ao "connect"; o Field controla as tags do form
//o componente Field e o metodo handleSubmit so estarão disponível após a ulitização do "reduxForm" como decorator ao componente
import { reduxForm, Field } from 'redux-form'

import { init } from "./cicloDePagamentoActions";
import LabelAndInput from "../common/form/LabelAndInput";

class cicloDePagamentoForm extends Component {

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
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type="button" className={`btn btn-${this.props.buttonClass}`} onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
//tag destroyOnUnmount serve para nao perder os dados do formulário. *A248*
export default connect(null, mapDispatchToProps)(reduxForm({form:'cicloDePagamentoForm', destroyOnUnmount:false})(cicloDePagamentoForm))