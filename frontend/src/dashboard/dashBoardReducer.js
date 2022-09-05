const INITIAL_STATE = {sumary: {debt: 0, credit: 0}}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case 'BILLING_SUMMARY_FETCHED':
            return {...state, sumary:action.payload.data}
        default:
            return state
    }
}