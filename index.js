const BUY_CAKE = "BUY_CAKE"

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
                numOfCakes:state.numOfCakes -1 
            }
            default: 
            return state
    }
}