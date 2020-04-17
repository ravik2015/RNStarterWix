const INITIAL_STATE = {};

function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGOUT':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default appReducer;
