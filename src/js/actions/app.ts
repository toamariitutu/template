export const REQUEST_SET_TEXT = '[APP]request_set_text'
export const SET_TEXT = '[APP]set_text'
export const RESET_TEXT = '[APP]reset_text'

export const requestSetText = (text: string) => ({
  type: REQUEST_SET_TEXT as typeof REQUEST_SET_TEXT,
  payload: {
    text,
  },
})

export const setText = (text: string) => ({
  type: SET_TEXT as typeof SET_TEXT,
  payload: {
    text,
  },
})

export const resetText = () => ({
  type: RESET_TEXT as typeof RESET_TEXT,
})

export type Actions = ReturnType<typeof setText> | ReturnType<typeof resetText>
