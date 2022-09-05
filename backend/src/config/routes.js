const express = require('express')

module.exports = function(server){
    
    //url geral
    const router = express.Router()
    server.use('/api', router)

    //rotas do sistema
    const modelBillingCycle = require('../api/billingCycle/billingCycleService')
    
    //metodo register(node-restful) nos auxilia para que nao tenhámos que registrar cada rota individualmente
    modelBillingCycle.register(router, '/billingCycle')
}