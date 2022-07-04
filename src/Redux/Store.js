import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({

});

const middleware = compose(applyMiddleware(thunk));

export const hydrateStore = (initialState) =>
  createStore(reducers, initialState || {}, middleware);
export default createStore(reducers, {}, middleware);
