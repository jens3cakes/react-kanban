import axios from 'axios';

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';

const API_CARDS_URL = 'api/cards';

export const loadCards = (cards) => {
  console.log('load',cards)
  return dispatch =>{
    return axios.get(API_CARDS_URL)
    .then(response => {
      const cards = response.data;
      dispatch({
        type:LOAD_CARDS,
        cards:cards
      })
    })
    .catch(err => {console.log(err)})
  }
};

export const addCard = (card)=>{
  // console.log('add',card)
  return dispatch => {
    return axios.post(API_CARDS_URL, card)
    .then(response => {
      const card = response.data;
      dispatch({
        type:ADD_CARD,
        card
      })
    })
.catch(err => {console.log(err)})
  }
  }
