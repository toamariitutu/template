import { SET_TEXT, RESET_TEXT, Actions } from '../actions/app'

export interface AppState {
  text: string
}

const initialState: AppState = {
  text: '',
}

export default function userListReducer(
  state: AppState = initialState,
  action: Actions,
) {
  switch (action.type) {
    case SET_TEXT: {
      return { ...state, text: action.payload.text }
    }
    case RESET_TEXT: {
      return { ...state, text: initialState.text }
    }
    default: {
      const check: never = action
      return state
    }
  }
}
