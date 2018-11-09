import { ReduxState } from '../reducers'

export const getText = (state: ReduxState): string => state.app.text
