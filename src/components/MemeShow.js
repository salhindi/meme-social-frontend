import React from "react"
import { Redirect } from "react-router-dom"
import TagsContainer from "../containers/TagsContainer"


const MemeShow = (props) => {

    console.log(props)
    let meme = props.memes.filter(m => m.id == props.match.params.id)[0]
    let image = props.memes.map(m => m.featured_image.url)

    return (
        <div>
             <li>

            {meme ? meme.title : <Redirect to = '/memes'/>}<br />
            {meme ? meme.top_text : null}<br />
            {meme ? meme.bottom_text : null}<br /> 
            <img src={image}></img>
        </li>
        <TagsContainer meme={meme} />
        </div>
    )
}

export default MemeShow