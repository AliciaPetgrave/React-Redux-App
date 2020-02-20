import {ADD_QUOTE, SUCCESS} from "../actions/mainActions"

export const initialState = {
    isLoading:false,
    quote: null
}


export const mainReducer = (state = initialState, action) => {
  switch(action.type){
      case ADD_QUOTE:
          return{
              ...state,
              isLoading: true
          }

          case SUCCESS:
              return{
                  ...state,
                  isLoading: false,
                  quote: action.payload
              }
      default: return state
  }
}
