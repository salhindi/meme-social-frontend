import React from "react";

const Tags = (props => {
    const handleDelete = () => {

    }
    return (
        <div>
            {props.tags && props.tags.map(tag => 
                <li key={tag.id}>{tag.name}</li> <button onClick={handleDelete}/>)}

        </div>        )
})

export default Tags