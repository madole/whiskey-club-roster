import {NEXT_SET, FETCH_USER, GOT_USER, GOT_REPOS} from '../constants/action-types'

const initialState = [];

export default function github(state = initialState, action = {}) {
  switch (action.type) {
    case GOT_USER:
      return {
        ...state,
        userData: action.userData,
        user: action.user,
      };
    case GOT_REPOS:
      return {
        ...state,
        userRepos: action.userRepos,
        user: action.user
      };
    default:
      return state;
  }
}