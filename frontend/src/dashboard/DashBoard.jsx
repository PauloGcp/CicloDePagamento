import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ContentHeader from "../common/template/ContentHeader";
import Content from "../common/template/Content";
import ValueBox from "../common/widget/ValueBox";
import Row from "../common/layout-operators/Row";
import { getSumary } from "./dashBoardActions";
import TabContent from "../common/tab/TabsContent";
import List from "../cicloDePagamento/CicloDePagamentoList";

class Dashboard extends Component{

    componentWillMount(){
        this.props.getSumary()
    }

    render(){
        const {credit, debt} = this.props.sumary
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0'/>
                <Content>
                    <Row>
                        <ValueBox cols={'12 4'} color={'green'} icon={'bank'} value={`R$ ${credit}`} text={'Total de Créditos'}/>
                        <ValueBox cols={'12 4'} color={'red'} icon={'credit-card'} value={`R$ ${debt}`} text={'Total de Débitos'}/>
                        <ValueBox color={'blue'} icon={'money'} value={`R$ ${credit - debt}`} text={'Valor Consolidado'}/>
                    </Row>
                    {/* refatora isso aq po 
                    <TabContent id='tabList'>
                                <List></List>
                    </TabContent> */}
                </Content>
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    sumary:state.dashboard.sumary
})

const mapDispatchToProps = (dispatch) => (bindActionCreators({ getSumary }, dispatch))

//conecta meu componente à store
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)