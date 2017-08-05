import { createAction, createReducer } from "redux-act"
const gameTickChange = createAction("game/tick/change")

export const startGameTick = () => {
  return dispatch => {
    setInterval(() => {
      dispatch(gameTickChange({ time: Date.now() }))
    }, 1000)
    // let last = null
    // const tick = time => {
    //   if (!last) last = time
    //   const diff = time - last
    //   last = time
    //   dispatch(gameTickChange({ diff, time, last }))
    //   requestAnimationFrame(tick)
    // }
    // requestAnimationFrame(tick)
  }
}

export const startGame = () => {}

const initialState = () => ({ diff: null, time: null, last: null })

export default createReducer(
  {
    [gameTickChange]: (state, { diff, time, last }) => ({
      ...state,
      diff,
      time,
      last,
    }),
  },
  initialState()
)
