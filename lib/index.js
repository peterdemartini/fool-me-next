import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"

import Game from "./containers/game"
import store from "./reducks/store"

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById("game-root")
)
