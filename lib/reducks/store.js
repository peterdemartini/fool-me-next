import { routerReducer } from "react-router-redux"
import { applyMiddleware, combineReducers, createStore } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"

import player from "./player"
import view from "./view"

const reducers = combineReducers({
  player,
  view,
  routing: routerReducer,
})

const createStoreWithMiddleware = applyMiddleware(logger, thunk)
const store = createStore(reducers, createStoreWithMiddleware)

export default store
