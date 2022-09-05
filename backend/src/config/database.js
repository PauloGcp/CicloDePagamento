const mongoose = require('mongoose')

//mongoose.Promise esta deprecated, por isso fazemos essa gambiarra para nao aparecer alerts
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/ciclo-de-pagamento',{useNewUrlParser: true})

//pro erro ficar bonitinho
mongoose.Error.messages.general.required = "o tributo '{PATH}' é obrigatório"
mongoose.Error.messages.Number.min = "o '{VALUE}' informado é menor que o limite mínimo de '{MIN}'"
mongoose.Error.messages.Number.max = "o '{VALUE}' informado é miaor que o limite máximo de '{MAX}'"
mongoose.Error.messages.String.enum = "o '{VALUE}' não é válido para o atributo '{PATH}'"