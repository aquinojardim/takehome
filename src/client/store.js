import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import mainReducer from './reducers/mainReducer';

const middlewares = [thunk];

// Pass in our only reducer file to createStore function
// Exporting a store to be used in Provider wrapping our App
const store = createStore(
  mainReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;