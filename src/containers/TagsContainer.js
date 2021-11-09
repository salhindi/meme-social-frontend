import React from 'react'
import TagInput from '../components/TagInput'
import Tags from '../components/Tags'

class TagsContainer extends React.Component {
    render() {
        return (
            <div>
                <TagInput meme={this.props.meme}/>
                <Tags tags={this.props.meme && this.props.meme.tags} />
            </div>
        )
    }
}

export default TagsContainer