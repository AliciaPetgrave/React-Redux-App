import axios from 'axios'

export const addQuote = () => {
    return dispatch => {
        dispatch ({type: "ADD_QUOTE"})
        axios.get("http://api.icndb.com/jokes/random?firstName=Chuck&amp;lastName=Norris")
        .then(response => {
            console.log(response.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }
}