import {LOAD_CARDS, ADD_CARD, EDIT_CARD} from '../cardAction/action';
//import AddCard from '../components/AddCard';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type){
    case LOAD_CARDS:
    console.log('reducer',action.cards)
    state = [...action.cards];
    return state;
    case ADD_CARD:
    console.log('add', action.cards)
    return [...state, action.cards];
    case EDIT_CARD:
    console.log('edit', action.cards)
    return state = [...state, action.cards]
    default:
    return state;
  }
}
export default reducer;