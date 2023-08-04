const redux = require("redux");
const produce=require("immer").produce;
//state
const initialState={
    name:"Aravind",
    address:{
        street:"123 Main st",
        city:"Chennai",
        State:"Tamil Nadu"
    }
}
const STREET_UPDATE="STREET_UPDATE"
//action
const updateStreet=(street)=>{
    return{
    type:STREET_UPDATE,
    payload:street,}
}
const reducer=(state=initialState,action)=>{
    switch (action.type){
        case STREET_UPDATE:
            // return{
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street:action.payload
            //     }
            // }
            return produce(state,(draft)=>{
                draft.address.street=action.payload     
            })
        default:{
            return state
        }
    }
}
const store=redux.createStore(reducer)
console.log("Initial State:",store.getState());
const unSubscribe=store.subscribe(()=>{
    console.log("Updated State:",store.getState());
})
store.dispatch(updateStreet("456 Main st"))//passsed as value to the update state function
unSubscribe()