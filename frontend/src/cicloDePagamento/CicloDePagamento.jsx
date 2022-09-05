import React, { Component } from "react";

import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'

class CicloDePagamento extends Component{
    render(){
        return(
            <div>
                <ContentHeader title='Ciclos de Pagamentos'small='Cadastro' />
                <Content>
                    <h1>Ciclos de pagamento</h1>
                </Content>
            </div>
        )
    }
}

export default CicloDePagamento