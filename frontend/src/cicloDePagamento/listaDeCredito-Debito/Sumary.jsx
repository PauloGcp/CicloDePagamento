import React, { Component } from 'react';
import { render } from 'react-dom';

import Grid from '../../common/layout-operators/Grid';
import Row from '../../common/layout-operators/Row';
import ValueBox from '../../common/widget/ValueBox';

//destructor diretamente do props, sem a declaração dele
export default ({credit, debt}) =>{
    return (
            <Grid cols='12'>
                <fieldset>
                    <legend>Resumo</legend>
                </fieldset>
                <Row>
                    <ValueBox cols={'12 4'} color={'green'} icon={'bank'} value={`R$ ${credit}`} text={'Total de Créditos'}/>
                    <ValueBox cols={'12 4'} color={'red'} icon={'credit-card'} value={`R$ ${debt}`} text={'Total de Débitos'}/>
                    <ValueBox color={'blue'} icon={'money'} value={`R$ ${credit - debt}`} text={'Valor Consolidado'}/>
                </Row>
            </Grid>

    )
}



