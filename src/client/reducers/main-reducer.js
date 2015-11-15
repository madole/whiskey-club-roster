import { ADD_PERSON,
  MOVE_CARD,
  GOT_CARDS } from '../constants/action-types';

const initialState = {};


function getMaxId(previous, current) {
  if (previous.id > current.id) {
    return previous;
  } else {
    return current;
  }
}

export default function mainReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_PERSON: {
      const { person } = action;
      let { cards } = state;
      cards.push(person)
      return {
        ...state,
        cards
      }
    }
    case GOT_CARDS: {
      return {
        ...state,
        cards: action.cards
      }
    }
    case MOVE_CARD: {
      let cards = state.cards;
      const { dragIndex, hoverIndex } = action;
      const dragCard = cards[dragIndex]
      cards.splice(dragIndex, 1)
      cards.splice(hoverIndex, 0, dragCard)
      return {
        ...state,
        cards
      }
    }
    default:
  return state;
  }
}
