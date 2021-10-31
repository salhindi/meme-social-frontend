//takes previous state as first arguement
// action object as second
//inside reducer update reducer according to action type
export default function memeReducer(state = {memes: []}, action) {
    // debugger;
    switch (action.type) {
        case 'FETCH_MEMES':
            return {memes: action.payload}
        case 'CREATE_MEME':
            return {...state, memes: [...state.memes, action.payload]}
            default:
                return state
    }
}