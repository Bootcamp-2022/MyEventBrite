import axios from "axios";
import { EVENT_LIST_FAIL, EVENT_LIST_REQUEST, EVENT_LIST_SUCCESS,EVENT_REQUEST,EVENT_SUCCESS,EVENT_FAIL,EVENT_RESERVE_REQUEST,EVENT_RESERVE_SUCCESS,EVENT_RESERVE_FAIL } from "../constants/eventConstants"


export const listEvents = () => async (dispatch) =>{
    try{
        dispatch({
            type: EVENT_LIST_REQUEST
        });

        const {data} = await axios.get('/api/events')

        dispatch({
            type: EVENT_LIST_SUCCESS,
            payload: data
        })

    }

    catch (error){
        dispatch({ 
            type: EVENT_LIST_FAIL,
            payload: error.response && error.response.data.messae ?
             error.response.data.message : error.message
        })
    }

}

export const listEvent = (id) => async (dispatch) => {
    try {
        dispatch({ type: EVENT_REQUEST })
        const {data} = await axios.get(`/api/events/${id}`)
        
        dispatch({
            type: EVENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: EVENT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const reserveEvent =(id) => async (dispatch) => {
    try {
        dispatch({ type: EVENT_RESERVE_REQUEST });
        const { data } = await axios.get(`/api/events/reserve/${id}`);
        dispatch({
            type: EVENT_RESERVE_SUCCESS,
            payload: data
        })
            } catch (error) {
        dispatch({
            type: EVENT_RESERVE_FAIL,
            payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
        })
    }
}