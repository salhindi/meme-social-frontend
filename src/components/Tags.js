import React from "react";
import { connect } from "react-redux";
import { deleteTag } from "../actions/deleteTag";

const Tags = (props => {
    const handleDelete = (tag) => {
        props.deleteTag(tag.id, tag.meme_id)
    }
    return (
        <div>
            {props.tags && props.tags.map(tag => 
                <li key={tag.id}>{tag.name} <button onClick={() => handleDelete(tag)}/></li>
                )}

        </div>        )
})

export default connect(null, {deleteTag})(Tags)