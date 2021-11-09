export const addTag = (tag, memeId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/memes/${memeId}/tags`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tag)
        })
        .catch(err=>console.log(err))
        .then(resp => resp.json())
        .then(meme => dispatch({type: 'ADD_TAG', payload: meme}))
    } 
}