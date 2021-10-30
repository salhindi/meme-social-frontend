import React from "react";

const Memes = (props) => {
    
    return (
        <div>
           {props.memes.map(meme => <li key={meme.id}>{meme.title}, {meme.top_text}, {meme.bottom_text}, {meme.image} </li>)}
        </div>
    )
}

export default Memes
