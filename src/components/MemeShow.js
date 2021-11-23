import React from "react"
import { Redirect } from "react-router-dom"

import TagsContainer from "../containers/TagsContainer"

const MemeShow = (props) => {
    

    console.log(props.memes.map(m => m.featured_image))
    
    let meme = props.memes.filter(m => m.id == props.match.params.id)[0]
    

    return (
        <div>
            {meme ? meme.title : null}<br />
            {meme ? meme.top_text : null}<br />
            {meme ? meme.bottom_text : null}<br /> 
            {meme && meme.featured_image !== null ? <img src={meme.featured_image.url} alt={meme.title}/> : null}<br /> 
        
        <TagsContainer meme={meme} />
        </div>
    )
}

export default MemeShow