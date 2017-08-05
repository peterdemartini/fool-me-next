import { routerReducer } from "react-router-redux"
import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"

import player from "./player"
import game from "./game"

const reducers = combineReducers({
  player,
  game,
  routing: routerReducer,
})

const createStoreWithMiddleware = applyMiddleware(thunk)
const store = createStore(reducers, createStoreWithMiddleware)

export default store
