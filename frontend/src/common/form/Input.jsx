//input feito para o "CreditList" (redux-form: "Field")

import React from "react";

export default (props) => {
    return (
        //como visto em alguns exemplos, o redux form ja passa algumas propriedades
        <input {...props.input} className="form-control" 
        placeholder={props.placeholder} readOnly={props.readOnly} type={props.type}/>
    )
}