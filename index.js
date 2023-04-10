const redux = require('redux');
const createStore = redux.createStore
const BUY_CAKE = "BUY_CAKE"
const CAKE_RESTOCKED = "CAKE_RESTOCKED";


const restockCake = (qty = 1)=>{
    return {
        type:CAKE_RESTOCKED,
        quantity:qty,

    }
}

const actionCreator = ()=>{
    return {
        type:BUY_CAKE,
        quantity:1
    }
}


const initialState = {
    
    numOfCakes:10,
    anotherState:0
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numOfCakes:state.numOfCakes -1,
                anotherState: state. anotherState+1

            }

            case CAKE_RESTOCKED:
                return{
                    ...state,
                    numOfCakes:state.numOfCakes + action.quantity
                }
            default: 
            return state;
    }
}



const store = createStore(reducer)

console.log("initial State", store.getState())

const unsub = store.subscribe(()=>console.log("update state", store.getState()))



store.dispatch(actionCreator())

store.dispatch(actionCreator())
store.dispatch(actionCreator())
store.dispatch(restockCake(4))
unsub()