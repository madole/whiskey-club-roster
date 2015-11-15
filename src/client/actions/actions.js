require('es6-promise').polyfill();
require('isomorphic-fetch');
import * as types from '../constants/action-types';
import guid from '../utils/guid';

export function recievedCards(cards) {
  return {type: types.GOT_CARDS, cards};
}

export function getCards() {
  return (dispatch) => {
    return fetch('http://localhost:3000/data')
      .then(res => res.json())
      .then(json => dispatch(recievedCards(json)));
  };
}

export function moveCard(dragIndex, hoverIndex) {
  return {type: types.MOVE_CARD, dragIndex, hoverIndex};
}

export function addPersonComplete(person) {
  return {type: types.ADD_PERSON, person};
}

export function addPerson(person) {
  const personDetails = {
    id: guid(),
    text: person
  };

  return (dispatch) => {
    return fetch('http://localhost:3000/addPerson',
        {
          method: 'post',
          headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
          },
          body: JSON.stringify(personDetails)
    }).then((res) => {
      if (res.status === 200) {
        dispatch(addPersonComplete(personDetails));
      }
    });
  };
}
