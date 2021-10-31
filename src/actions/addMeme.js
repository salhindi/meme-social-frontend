export function addMeme(data) {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/memes', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(memeData => dispatch({type:"CREATE_MEME", payload: memeData})) 
        
    }
}