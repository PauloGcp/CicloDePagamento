const restful = require('node-restful')

// pegaremos a referencia do mongoose que esta dentro do node restful, mas poderiamos dar o require no ja instanciado
const mongoose = restful.mongoose

// o mongo nao utiliza schema em sua base, mas o faremos para ter um certo nivel de validaçao
const creditoSchema = new mongoose.Schema({
    name: {type: String, require: true},
    value: {type: Number, min: 0, required:true},
})

const debitoSchema = new mongoose.Schema({  
    name: {type: String, require: true},
    //maneira de sobrescrever a msg padrao de erro 
    value: {type: Number, min: 0, required:[true, 'Informe o valor do débito.']},
    status: {type: String, required: false, uppercase: true, enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
})

const cicloDePagamentoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    mes:{type: Number, min:1, max:12, required: true},
    ano:{type: Number, min: 1970, max:2100, required: true},
    debito:[debitoSchema],
    credito:[creditoSchema]
})

module.exports = restful.model('CicloDePagamento', cicloDePagamentoSchema)