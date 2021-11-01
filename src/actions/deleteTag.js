export const deleteTag = (tagId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/memes/${memeId}/tags/${tagsId}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(meme => dispatch({type: 'DELETE_TAG', payload: meme}))

    }
}