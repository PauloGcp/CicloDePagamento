import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getList, showUpdtate, showDelete } from './cicloDePagamentoActions';

class CicloDePagamentoList extends Component {
    componentWillMount(){
        this.props.getList()
    }

    renderRows(){
        const list = this.props.list || []
        return list.map(cp => (
            <tr key ={cp._id}>
                <td>{cp.name}</td>
                <td>{cp.ano}</td>
                <td>{cp.mes}</td>
                <td>
                    <button className='btn btn-warning' onClick={()=>{this.props.showUpdtate(cp)}}>
                        <i className='fa fa-pencil'></i> 
                    </button>
                    <button className='btn btn-danger' onClick={()=>{this.props.showDelete(cp)}}>
                        <i className='fa fa-trash-o'></i> 
                    </button>
                </td>
            </tr>
            
        ))
    }
    render(){
        return(
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mes</th>
                            <th>Ano</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    list: state.cicloDePagamento.list
})

const mapDispatchToProps = dispatch =>( bindActionCreators({getList, showUpdtate, showDelete}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(CicloDePagamentoList)

