//takes previous state as first arguement
// action object as second
//inside reducer update reducer according to action type
export default function memeReducer(state = {memes: []}, action) {
    return action.payload

}