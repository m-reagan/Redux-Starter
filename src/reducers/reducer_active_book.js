export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      console.log('payload');
      console.log(action.payload);
      return action.payload;
    default:
  }
  return state;
}