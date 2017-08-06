import { createAction, createReducer } from "redux-act"
import isEqual from "lodash/fp/isEqual"
import isEmpty from "lodash/fp/isEmpty"
import get from "lodash/fp/get"

export const resizeAction = createAction("view/action")

const didViewChange = (current, next) => {
  if (isEmpty(next)) return false
  if (!isEqual(get("width", current), get("width", next))) return false
  if (!isEqual(get("height", current), get("height", next))) return false
  return true
}

export const resize = (current, next) => {
  return dispatch => {
    if (!didViewChange(current, next)) return
    dispatch(resizeAction(next))
  }
}

const initialState = () => ({
  width: 0,
  height: 0,
})

export default createReducer(
  {
    [resizeAction]: (state, view) => ({
      ...state,
      ...view,
    }),
  },
  initialState()
)
