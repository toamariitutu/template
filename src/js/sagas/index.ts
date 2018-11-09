import { fork, all } from 'redux-saga/effects'
import { requestChangeText } from './app'

export default function* root() {
  yield all([fork(requestChangeText)])
}
