
const initialState = 0;

const reducer = ( state = 0, action ) => {

  switch (action.type) {

    case 'INC':
      return state =1;

      default:
       return state;
  }

};

let state = reducer( initialState, { type: 'INC'} );

console.log('State - ', state);

// N 104-105
