
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={restaurants: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return { restaurants: state.restaurants.concat(action.payload.text) }
    default:
      return state;
  }
}
