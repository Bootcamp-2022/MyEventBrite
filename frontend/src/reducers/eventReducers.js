import { EVENT_LIST_FAIL, EVENT_LIST_REQUEST, EVENT_LIST_SUCCESS, EVENT_REQUEST,EVENT_SUCCESS,EVENT_FAIL, EVENT_RESERVE_REQUEST,EVENT_RESERVE_SUCCESS,EVENT_RESERVE_FAIL } from "../constants/eventConstants";


export const eventListReducer = (state = {events: []},
action) => {
    switch (action.type) {
        case EVENT_LIST_REQUEST:
            return {loading: true, events: []}
        case EVENT_LIST_SUCCESS:
            return {loading: false, events: action.payload}
        case EVENT_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state 
    }
}

export const eventReducer = (state={event:{}},action) => {
    switch (action.type){
      case    EVENT_REQUEST:
        return {loading:true, ...state}
      case EVENT_SUCCESS:
        return {loading:false, event:action.payload}
        case EVENT_FAIL:
          return {loading:false, error:action.payload}  
        default: 
        return state  
    }
        }

        export const eventReserveReducer = (state={event:{}},action) => {
          switch (action.type){
            case EVENT_RESERVE_REQUEST:
              return {loading: true,...state}
              case EVENT_RESERVE_SUCCESS:
                return {laoding:false, event: action.payload}
                case EVENT_RESERVE_FAIL:
                  return {loading:false, error:action.payload}  
                  default: 
                  return state  
          }
        }