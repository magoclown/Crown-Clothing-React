import { takeLatest, put, all, call } from 'redux-saga/core/effects';

import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';

export function* clearCartSOnSignOut() {
  yield put(clearCart);
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartSOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
