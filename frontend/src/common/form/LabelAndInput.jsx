import React from "react";
import Grid from "../layout-operators/Grid";

export default (props) => {
    return (
        <Grid cols = {props.cols}>
            <div className="form-group">
                {/* mesma coisa do "For" no html puro */}
                <label htmlFor={props.name}>{props.label}</label>
                {/*a propriedade input é passada atraves do Field no componente do formulário
                 do ciclo de pagamento. Utilizamos o spread para que todas as propriedades passadas
                 para o input sejam passadas ao componente*/}
                <input {...props.input} className="form-control" 
                    placeholder={props.placeholder} 
                    readOnly={props.readOnly} type={props.type}/>
            </div>
        </Grid>
    )
}