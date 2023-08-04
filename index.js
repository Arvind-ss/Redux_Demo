const redux = require("redux");
const createStore = redux.legacy_createStore;
const CAKE_ORDERED = "cake_ordered";
const CAKE_RESTOCKED="cake_restocked";
//ACTIONS:-
// * actions are the only way applications can interact with the store
// * carry some info from app to redux store
// * plain javaScript object
// * Have a type property that describes something that happened in the application

// //ActionCreator:a function which returns a action

function order_cake(qty) {
  return {
    //Action is passed as a method
    type: "CAKE_ORDERED",
    payload: qty,
  };
}
function order_restocked(qty){
  return{
    type:"CAKE_RESTOCKED",
    payload:qty
  }
}
// //State
const initialState = {
  noOfCakes: 10,
};
// //Reducer:-
// // * Reducer's Specify how the app's state changes inresponse to actions sent to the store
// // * Reducer is a Function which accepts state and function as argument and returns thre next state as a
// Reducer:- (previousState,action)=>new State
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CAKE_ORDERED":
      return {
        ...state,
        noOfCakes: state.noOfCakes - action.payload,
      };
      case"CAKE_RESTOCKED":
        return{
          ...state,
          noOfCakes:state.noOfCakes+action.payload
        }
    default:
      return state;
  }
};
const store = createStore(reducer); // store created and the initialStates have been saved in the store
console.log("Initial State:", store.getState()); //since we have not performed any transsitions yet getState would provide
const unSubscribe = store.subscribe(() =>
  console.log("Update State:", store.getState())
);
store.dispatch(order_cake(2));
store.dispatch(order_restocked(1))
unSubscribe();
