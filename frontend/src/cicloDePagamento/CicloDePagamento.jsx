import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import Tabs from "../common/tab/Tabs";
import TabsHeader from "../common/tab/TabsHeader";
import TabsContent from "../common/tab/TabsContent";
import TabHeader from "../common/tab/TabHeader";
import TabContent from './../common/tab/TabContent';
import { create, update, deletee, init } from "./cicloDePagamentoActions";
import List from "./CicloDePagamentoList";
import Form from './CicloDePagamentoForm'

class CicloDePagamento extends Component{
    componentWillMount(){
        this.props.init()
    }

    render(){
        return(
            <div>
                <ContentHeader title='Ciclos de Pagamentos'small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon ='bars' target='tabList'/>
                            <TabHeader label='Incluir' icon ='plus' target='tabCreate'/>
                            <TabHeader label='Alterar' icon ='pencil' target='tabUpdate'/>
                            <TabHeader label='Excluir' icon ='trash-o' target='tabDelete'/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List></List>
                            </TabContent>
                            <TabContent id='tabCreate'>
                                {/*os parametros passados, por padrao neste caso, ao create são os que chegam ao 'onSubmit' */}
                                <Form onSubmit={this.props.create} submitLabel='incluir' submitClass ='primary'/>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={this.props.update} submitLabel='Alterar' submitClass ='info'/>
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form readOnly={true} onSubmit={this.props.deletee} submitLabel='Deletar' submitClass ='danger'/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>( bindActionCreators({init, create, update, deletee}, dispatch))

export default connect(null, mapDispatchToProps)(CicloDePagamento)