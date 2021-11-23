import React from "react";
import {Link } from 'react-router-dom'


const Memes = (props) => {

    
    
    return (
        
        <div className="memes">

           {props.memes.map(meme => <div key={meme.id}><Link to={`/memes/${meme.id}`}>{meme.title}</Link>
           </div>)}
        </div>
    )
}



export default Memes
