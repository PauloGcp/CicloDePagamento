const modelBillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

modelBillingCycle.methods(['get','post','delete','put'])
//essa configuracao (runValidators) é feita pq a validacao é aplicada por padrão apenas ao método post
modelBillingCycle.updateOptions({new: true, runValidators: true})
modelBillingCycle.after('post', errorHandler).after('put', errorHandler)

modelBillingCycle.route('count', (req, res, next)=>{
    modelBillingCycle.count((error, value)=>{
        if (error){
            res.status(500).json({errors: [error]})
        } else{
            res.json({value})
        }
    })
})

//*problema de versão do moongose*
modelBillingCycle.route('summary', (req, res, next) => {
    modelBillingCycle.aggregate([{ 
        $project: {credit: {$sum: "$credito.value"}, debt: {$sum: "$debito.value"}} 
    }, { 
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, { 
        //id = false; credit, debt = true
        $project: {_id: 0, credit: 1, debt: 1}
    }], (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || {credit: 0, debt: 0})
        }
    })
})

//*problema de versionamento do node-restful*
modelBillingCycle.route('get', (req, res, next) => {
    modelBillingCycle.find({}, (err, docs) => {
        if(!err) {
            res.json(docs)
        } else {
            res.status(500).json({errors: [error]})
        }
    }).skip(req.query.skip).limit(req.query.limit)
})

module.exports = modelBillingCycle