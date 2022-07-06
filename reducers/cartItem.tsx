/* eslint-disable no-fallthrough */
/* eslint-disable prettier/prettier */
const cartItem = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
        return [..state, actoion.payload] 
        return state.filter(cartItem =>cartItem.id !==action.payload.id)       
        //
  }
  return state;
}; 
export default cartItem;
