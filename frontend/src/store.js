import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { eventListReducer,eventReducer,eventReserveReducer } from './reducers/eventReducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
    eventList: eventListReducer,
    eventDetails: eventReducer,
    eventReserve: eventReserveReducer,
    cart: cartReducer,
})
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const initialState = {
  cart: { cartItems: cartItemsFromStorage }
};
const middleware = [thunk]
const store = createStore(
                 reducer,
                 initialState,
                  composeWithDevTools(applyMiddleware(...middleware)
                 ))

export default store