const redux = require("redux");
const createStore = redux.legacy_createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const CAKE_ORDERED = "cake_ordered";
const CAKE_RESTOCKED = "cake_restocked";
const ICECREAM_ORDERED = "iceCream_ordered";
const ICECREAM_RESTOCKED = "iceCream_restocked";
//ACTIONS:-
// * actions are the only way applications can interact with the store
// * carry some info from app to redux store
// * plain javaScript object
// * Have a type property that describes something that happened in the application

// //ActionCreator:a function which returns a action

function cake_ordered(qty) {
  return {
    //Action is passed as a method
    type: "CAKE_ORDERED",
    payload: qty,
  };
}
function cake_restocked(qty) {
  return {
    type: "CAKE_RESTOCKED",
    payload: qty,
  };
}
function iceCream_ordered(qty) {
  return {
    type: "ICECREAM_ORDERED",
    payload: qty,
  };
}
function iceCream_restocked(qty) {
  return {
    type: "ICECREAM_RESTOCKED",
    payload: qty,
  };
}
// //State
// const initialState = {
//   noOfCakes: 10,
// };
const cake_initialState = {
  noOfCakes: 10,
};
const iceCream_initialState = {
  noOficeCreams: 10,
};
// //Reducer:-
// // * Reducer's Specify how the app's state changes inresponse to actions sent to the store
// // * Reducer is a Function which accepts state and function as argument and returns thre next state as a
// Reducer:- (previousState,action)=>new State
const cake_reducer = (state = cake_initialState, action) => {
  switch (action.type) {
    case "CAKE_ORDERED":
      return {
        ...state,
        noOfCakes: state.noOfCakes - action.payload,
      };
    case "CAKE_RESTOCKED":
      return {
        ...state,
        noOfCakes: state.noOfCakes + action.payload,
      };
    default:
      return state;
  }
};
const iceCream_reducer = (state = iceCream_initialState, action) => {
  switch (action.type) {
    case "ICECREAM_ORDERED":
      return {
        ...state,
        noOficeCreams: state.noOficeCreams - action.payload,
      };
    case "ICECREAM_RESTOCKED":
      return {
        ...state,
        noOficeCreams: state.noOficeCreams + action.payload,
      };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  cake: cake_reducer,
  iceCream: iceCream_reducer,
});
const store = createStore(rootReducer, applyMiddleware(logger)); // store created and the initialStates have been saved in the store
console.log("Initial State:", store.getState()); //since we have not performed any transsitions yet getState would provide
const unSubscribe = store.subscribe(() =>
  console.log("Update State:", store.getState())
);
store.dispatch(cake_ordered(2));
store.dispatch(cake_restocked(1));
store.dispatch(iceCream_ordered(2));
store.dispatch(iceCream_restocked(1));
unSubscribe();
