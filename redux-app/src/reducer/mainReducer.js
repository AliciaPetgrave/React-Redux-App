export const initialState = {
    isLoading:false,
    chuck: null
}


export const mainReducer = (state = initialState, action) => {
  switch(action.type){
      case "ADD_QUOTE":
          return{
              ...state,
              isLoading: true
          }
      default: return state
  }
}
