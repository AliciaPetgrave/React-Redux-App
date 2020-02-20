import axios from 'axios'
export const ADD_QUOTE = "ADD_QUOTE"
export const SUCCESS = "SUCCESS"

export const addQuote = () => dispatch => {
        dispatch ({type: "ADD_QUOTE"})
        axios.get("https://api.kanye.rest")
        .then(response => {
            console.log(response.data)
            dispatch({type: "SUCCESS", payload: response.data.quote})
        })
        .catch(err =>{
            console.log(err)
        })
    
}