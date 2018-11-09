import { take, put, call, select, spawn } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import * as appActions from '../actions/app'

/**
 * テキスト変更用のsaga
 */
export function* requestChangeText() {
  while (true) {
    const action = yield take(appActions.REQUEST_SET_TEXT)
    const { text } = action.payload
    const displayText = `${text}!!!!`

    yield put(appActions.setText(displayText))
  }
}
