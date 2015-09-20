require('es6-promise').polyfill();
require('isomorphic-fetch');
import * as types from '../constants/action-types'

export function fetchUser(user) {
  return (dispatch) => {
    return  fetch(`https://api.github.com/users/${user}`)
      .then(res => res.json())
      .then(json => dispatch(receivedUserData(user, json)));
  }
}

export function fetchRepos(user) {
  return (dispatch) => {
    return  fetch(`https://api.github.com/users/${user}/repos?per_page=100`)
      .then(res => res.json())
      .then(json => dispatch(receivedRepoData(user, json)))
  }
}

export function receivedRepoData(user, json) {
  return {type: types.GOT_REPOS, userRepos: json, user}
}

export function receivedUserData(user, json) {
  return {type: types.GOT_USER, userData: json, user}
}

export function gotUserData(userData) {
  return {type: types.GOT_USER, userData}
}

