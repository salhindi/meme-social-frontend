export function fetchMemes() {
    return (dispatch) => { 
        fetch('http://localhost:3000/api/v1/memes')
        .then(resp => resp.json())
        .then(memeData => dispatch({
            type: 'FETCH_MEMES',
            payload: memeData
        }))
    }
}
