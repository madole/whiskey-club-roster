
import {NEXT_SET, FETCH_USER, GOT_USER} from '../constants/action-types'

const initialState = [];

export default function github(state = initialState, action = {}) {
  switch (action.type) {
    case NEXT_SET:
      return [{
        text: 'NEXT_SET',
        id: state.reduce((maxId, github) => Math.max(github.id, maxId), -1) + 1
      },
        ...state
      ];

    case GOT_USER:
      return [{
        userData: action.userData,
        user: action.user,
        id: state.reduce((maxId, github) => Math.max(github.id, maxId), -1) + 1
      },
        ...state
      ];
    default:
      return state;
  }
}