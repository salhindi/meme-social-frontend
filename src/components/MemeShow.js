import React from "react"


const MemeShow = (props) => {

    console.log(props)
    let meme = props.memes[props.match.params.id - 1]

    return (
        <li>
            {meme ? meme.title : null}<br />
            {meme ? meme.top_text : null}<br />
            {meme ? meme.bottom_text : null}<br />
            {meme ? meme.featured_image : null}<br />
        </li>
    )
}
export default MemeShow