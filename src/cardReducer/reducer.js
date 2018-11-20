import {LOAD_CARDS, ADD_NEW_CARD} from '../cardAction/action';
import AddCard from '../components/AddCard';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type){
    case LOAD_CARDS:
    state = [...action.cards];
    return state;
    default:
    return state;
  }
}
export default reducer;