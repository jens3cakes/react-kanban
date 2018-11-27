import { LOAD_CARDS, ADD_CARD, EDIT_CARD, LOAD_PRIORITIES, LOAD_STATUSES, LOAD_USERS, DELETE_CARD} from '../cardAction/action';
//import AddCard from '../components/AddCard';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      console.log('reducer', action.cards)
      state = [...action.cards];
      return state;
    case ADD_CARD:
      //console.log('add', action.cards)
      return state = [...state, action.cards];
    case EDIT_CARD:
      console.log('edit Reducer', action.card)
      console.log('here is state', state)

      const newState = state.map((card) => {
        console.log('farts', card)
        if (card.id === action.card.id) {
          console.log('replace card here', action.card, card)
          return action.card
        } else {
          return card
        }
      })
      return newState;

    // case EDIT_CARD:
    //   return [...state.filter(card => card.id !== action.card.id),
    //     Object.assign({}, action.card)
    //   ];

    case LOAD_USERS:
      console.log('load users', action.users)
      state = [...action.users]
      return state;
    case LOAD_PRIORITIES:
      state = [...action.priorities]
      return state;
    case LOAD_STATUSES:
      state = [...action.statuses]
      return state;
      // case DELETE_CARD:
      // return [...action.cards];
    default:
      return state;
  }
}





export default reducer;