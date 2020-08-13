import * as types from '../constants/actionTypes';

// Set initial state
const initialState = {
  fav: [],
  db:{},
  gameBoard: [
    "-", "-", "-", "-", "-", "-", "-", "-",
    "-", "-", "-", "-", "-", "-", "-", "-",
    "-", "-", "-", "-", "-", "-", "-", "-",
    "-", "-", "-", "-", "-", "-", "-", "-",
    "-", "-", "-", "-", "-", "-", "-", "-",
    "-", "-", "-", "-", "-", "-", "-", "-",
    "-", "-", "-", "-", "-", "-", "-", "-",
    "-", "-", "-", "-", "-", "-", "-", "-",
    "-", "-", "-", "-", "-", "-", "-", "-",
    "-", "-", "-", "-", "-", "-", "-", "-",
  ],
  currentPlayer: "Red",
  // pieces red are 0 to 16
  // piecer grey are 48 to 64
  currentPiece: '',
  suggestedMove: [],
  gamestart: true,
  gameover: false,
  message: "Is Red turn",
};

const mainReducer = (state = initialState, action) => {
  // copy all state properties do avoid state mutability
  let currentPieceCopy;
  let suggestedMoveCopy = [];
  let dbCopy = {...state.db}
  let favCopy = [...state.fav]

  switch (action.type) {
    // Update state with payload
    case types.SET_CURRENT_PIECE:
      console.log(action.payload)
      currentPieceCopy = `${action.payload.id}piece`
      // cover edge case when you just have one move
      const boardLeft = [0, 8, 16, 24, 32, 40, 48, 56]
      const boardRight = [7, 15, 23, 31, 39, 47, 55, 63]
      if(action.payload.color){
        if(!boardLeft.includes(action.payload.id)) suggestedMoveCopy.push(action.payload.id+7)
        if(!boardRight.includes(action.payload.id)) suggestedMoveCopy.push(action.payload.id+9)
      } else {
        if(!boardRight.includes(action.payload.id))suggestedMoveCopy.push(action.payload.id-7)
        if(!boardLeft.includes(action.payload.id)) suggestedMoveCopy.push(action.payload.id-9)
      }

      console.log(suggestedMoveCopy)

      return {
        ...state,
        currentPiece: currentPieceCopy,
        suggestedMove: suggestedMoveCopy
      };

    case types.ADD_FAV:
      
      favCopy.push(action.payload)

      return {
        ...state,
        fav: favCopy,
      };

    default:
      return state;
  }
};

export default mainReducer;
