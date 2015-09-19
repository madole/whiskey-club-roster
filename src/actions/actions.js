require('es6-promise').polyfill();
require('isomorphic-fetch');
import * as types from '../constants/action-types'

export function nextSet(howMany) {
  return { type: types.NEXT_SET, howMany }
}

export function fetchUser(user) {
  return function(dispatch) {
    return  fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((json) => dispatch(recievedData(user, json)));
  }
}

export function recievedData(user, json) {
  return {type: types.GOT_USER, userData: json, user}
}

export function gotUserData(userData) {
  return {type: types.GOT_USER, userData}
}

