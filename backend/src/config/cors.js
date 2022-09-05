module.exports = (req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", 'GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS')
    res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept')
    // esse middleware nao responde a requisição então lembre-se de colocar um "next"
    next()
}