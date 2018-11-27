import axios from 'axios';

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const LOAD_PRIORITIES = 'LOAD_PRIORITIES';
export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_STATUSES = "LOAD_STATUSES";
export const DELETE_CARD = "DELETE_CARD"


const API_CARDS_URL = 'api/cards';
const API_PRIORITIES_URL = 'api/priorities';
const API_STATUSES_URL = 'api/statuses';
const API_USERS_URL = 'api/users';

export const loadCards = (cards) => {
  return dispatch =>{
    return axios.get(API_CARDS_URL)
    .then(response => {
      const cards = response.data;
      console.log('load',cards)
      dispatch({
        type:LOAD_CARDS,
        cards:cards
      })
    })
    .catch(err => {console.log(err)})
  }
};

export const priority = (priority) => {
  console.log(priority)
  return dispatch => {
    return axios.get(API_PRIORITIES_URL)
    .then((response) => {
      const priorities = response.data;
      dispatch({
        type:LOAD_PRIORITIES,
        priorites:priorities
      })
    })
    .catch((err) => {console.log(err)})
  }
}

export const users = (users) => {
  //console.log('users action',users)
  return dispatch => {
    return axios.get(API_USERS_URL)
    .then((response) => {
      const users = response.data;
      console.log('users action2', users)
      dispatch({
        type:LOAD_USERS,
        users:users
      })
    })
    .catch((err)=>{console.log(err)})
  }
} 

export const statuses = (status) =>{
  console.log('actionstatus',status)
  return dispatch => {
    return axios.get(API_STATUSES_URL)
    .then((response) => {
      const statuses = response.data;
      dispatch({
        type:LOAD_STATUSES,
        statuses:statuses
      })
    })
  }
}

export const addCard = (card)=>{
   console.log('add',card)
  return dispatch => {
    return axios.post(API_CARDS_URL, card)
    .then(response => {
      const card = response.data;
      console.log('resp',card)
      dispatch({
        type:ADD_CARD,
        cards:card
      })
    })
.catch(err => {console.log(err)})
  }
  }
  export const edittedCard = (card) => {
    console.log('editaction', card)
    return dispatch => {
      
      return axios.put(API_CARDS_URL, card)
      .then(response => {
        const card = response.data;
        console.log('respEdit', card)
        //server side
        dispatch({
          type:EDIT_CARD,
          card:card
        })
      })
      .catch(err => {console.log(err)})
    }
  }
export const deleteCardRemover = (card) =>{
  return dispatch =>{
    return axios.delete(API_CARDS_URL, card)
    .then(response => {
      const card = response.data;
      dispatch({
        type:DELETE_CARD,
        card:card
      })

    })
  }
}
  