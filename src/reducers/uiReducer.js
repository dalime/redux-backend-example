export default function uiReducer(state = {
  sort: null
}, action) {
  switch(action.type) {
    case 'CHANGE_SORT':
      let { value } = action.payload;
      return Object.assign({}, state, { sort: value })
      break;
    default:
      return state;
  }
}
