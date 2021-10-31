import React from "react";
import MemeShow from './MemeShow'
import {Route} from 'react-router-dom'

const Memes = (props) => {
    return (
        <div>
            hi
           {props.memes.map(meme => <div key={meme.id}><MemeShow meme={meme}/></div>)}
           {/* <Route path='/memes/:id' render={() => <MemeShow /> } /> */}
        </div>
    )
}

export default Memes
