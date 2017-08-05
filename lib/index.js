import React from "react"
import { Provider } from "react-redux"
import { render } from "react-dom"

import Game from "./containers/game"
import store from "./reducks/store"

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById("game-root")
)
