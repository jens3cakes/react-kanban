export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_NEW_CARD = 'ADD_NEW_CARD';
export const loadCards = (cards) => {
  return {
    type:LOAD_CARDS,
    cards:cards
  }
};