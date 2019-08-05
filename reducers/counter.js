const initialState = {
  count: 0,
  clickCount: 0,
  addNum: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        clickCount: state.clickCount +1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        clickCount: state.clickCount +1

      };
    case 'RESET':
      return {
        ...state,
        addNum: action.count,
      };
    case 'CHANGE':
        return {
          ...state,
          count: state.count = parseInt(state.addNum),
          clickCount: 0
        }
    default:
      return state;
      
  }
}

export default counterReducer;