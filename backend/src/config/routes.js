const express = require('express')
const auth = require('./auth')

/* module.exports = function(server){
    
    //url geral
    const router = express.Router()
    server.use('/api', router)

    //rotas do sistema
    const modelBillingCycle = require('../api/billingCycle/billingCycleService')
    
    //metodo register(node-restful) nos auxilia para que nao tenhámos que registrar cada rota individualmente
    modelBillingCycle.register(router, '/billingCycle')
} */

module.exports = function(server){

    //serão as rotas protegidas
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    //aplicação do filtro de autorização às rotas que possuem o '/api'
    protectedApi.use(auth)

    //rotas do sistema
    const modelBillingCycle = require('../api/billingCycle/billingCycleService')

     //metodo register(node-restful) nos auxilia para que nao tenhámos que registrar cada rota individualmente
    modelBillingCycle.register(protectedApi, '/billingCycle')

    //rotas abertas
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}