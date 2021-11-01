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
        case 'ADD_TAG':
            return{...state, memes: state.memes.map(m => {
                if (m.id === action.payload.id) {
                    return action.payload
                } else
                return m
            })}
        case 'DELETE_TAG':
            return{...state, memes: state.memes.map(m => {
                if (m.id === action.payload.id) {
                    return action.payload
                } else
                return m
            })}

            default:
                return state
    }
}