import { createAction, createReducer } from "redux-act"
const jumpStart = createAction("player/jump/start")
const jumpEnd = createAction("player/jump/end")
let jumpTimeout = null

export const jump = () => {
  return dispatch => {
    clearTimeout(jumpTimeout)
    dispatch(jumpStart())

    jumpTimeout = setTimeout(() => {
      dispatch(jumpEnd())
    }, 100)
  }
}

const initialState = () => ({ jumping: false })

export default createReducer(
  {
    [jumpStart]: state => ({
      ...state,
      jumping: true,
    }),
  },
  {
    [jumpEnd]: state => ({
      ...state,
      jumping: false,
    }),
  },
  initialState()
)
