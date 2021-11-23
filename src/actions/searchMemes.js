export const searchMemes = meme => {
    return(dispatch) => {
        return fetch(`http://localhost:3000/api/v1/search?q=${meme}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({meme})
        })
        .then(resp => resp.json())
        .then(meme => {
            dispatch({ type: "FIND_MEME", payload: meme })
        })
    }
}