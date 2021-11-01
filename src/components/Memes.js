import React from "react";
// import MemeShow from './MemeShow'
import {Link } from 'react-router-dom'

const Memes = (props) => {
    return (
        <div>
            hi
           {props.memes.map(meme => <div key={meme.id}><Link to={`/memes/${meme.id}`}>{meme.title}</Link>
           </div>)}
           {/* <Route path='/memes/:id' render={() => <MemeShow /> } /> */}
        </div>
    )
}

export default Memes
