//ACTIONS:-
// * actions are the only way applications can interact with the store
// * carry some info from app to redux store
// * plain javaScript object
// * Have a type property that describes something that happened in the application

const CAKE_ORDERED = "CAKE_ORDERED";
//ActionCreator:a function which returns a action
function orderCake() {
  return;
  {
    type: CAKE_ORDERED;
    quantity: 1;
  }
}
//State
const initialState = {
  numOfCakes: 10,
};
//Reducer:-
// * Reducer's Specify how the app's state changes inresponse to actions sent to the store
// * Reducer is a Function which accepts state and function as argument and returns thre next state as a

// (previosState,action)=>newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
