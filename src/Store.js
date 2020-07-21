import { createStore } from 'redux';

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      state = action.payload;
      break;
  }
  return state;
}

const store = createStore(reducer, false);


store.subscribe(() => {

})


export default store
