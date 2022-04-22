import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from '../constants/cartConstants'

export const addToCart = (id, qty1) => async (dispatch, getState) => {
 const {data} = await axios.get(`/api/events/${id}`)

 dispatch({
     type: CART_ADD_ITEM,
     payload: {
         event: data._id,
         name: data.title,
         image: data.image,
         price: data.price,
         adtPrice:data.adtprice,
         kidPrice:data.kidprice,
         tickets: data.tickets,
         qty1
     }
 })
 localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch,getState) => {
    dispatch({
    type: CART_REMOVE_ITEM,
    payload: id
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data) => (dispatch) =>
{
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    })

    localStorage.setItem('shippingAddress', JSON.stringify
    (data))
}

export const savePaymentMethod = (data) => (dispatch) =>
{
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data,
    })

    localStorage.setItem('paymentMethod', JSON.stringify
    (data))
}