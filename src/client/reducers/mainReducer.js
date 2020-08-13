import * as types from '../constants/actionTypes';

// Set initial state
const initialState = {
  fav: [],
  db:{},
};

// all this functions could be in a helpers folder
// send a get request to the /info API to retrive all item from database
function getInfo() {
  fetch("/info", {
    method: "GET",
    headers: {'Content-Type': 'application/json'},
  })
  .then(res => res.json())
  .then(data => {
    // object with all data base info
    return data
  })
  .catch(err => {
    console.log('an error occured trying to get info');
    throw err;
  })
};

// send a post request to the /info API to save new item on database
function postInfo(payload) {
  fetch("/info", {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ item: payload })
  })
  .then(res => res.json())
  .then(data => {
    // data is an object with properties _id and item
    return data;
  })
  .catch(err => {
    console.log('an error occured trying to post info');
    throw err;
  })
};

// send a post request to the /info API to save new item on database
function deleteInfo(payload) {
  fetch(`/secret/task/${payload}`, {
    method: "DELETE",
    headers: {'Content-Type': 'application/json'},
  })
  .then(res => res.json())
  .then(data => {
    // data is an object with deleted object history on property _doc we have the same _id then payload
    return data._doc._id;
  })
  .catch(err => {
    console.log('an error occured trying to delete info');
    throw err;
  })
};

const mainReducer = (state = initialState, action) => {
  // copy all state properties do avoid state mutability
  let dbCopy = {...state.db}
  let favCopy = [...state.fav]

  switch (action.type) {
    // Update state with payload
    case types.ADD_FAV:
      
      favCopy.push(action.payload)

      return {
        ...state,
        fav: favCopy,
      };

    case types.GET_FETCH:
      
      dbCopy = getInfo()

      return {
        ...state,
        db: dbCopy,
      };

    case types.POST_FETCH:
      
      const newObj = postInfo(action.payload)
      dbCopy[newObj._id] = newObj.item
  
      return {
        ...state,
        db: dbCopy,
      };
    
    case types.DELETE_FETCH:
      
      const id = deleteInfo(action.payload)
      delete dbCopy[id]
    
      return {
        ...state,
        db: dbCopy,
      }; 

    default:
      return state;
  }
};

export default mainReducer;
