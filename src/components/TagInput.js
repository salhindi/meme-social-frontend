import React from 'react' 
import { connect } from 'react-redux'
import {addTag} from '../actions/addTag'
import "@pathofdev/react-tag-input/build/index.css";

class TagInput extends React.Component {
    state = {
        name: ""
    }
    tagChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTag(this.state, this.props.meme.id)
    }
 

    
    render() {
        return (
            <div>
                tags
                <form onSubmit={this.handleSubmit}>
                    Add Tags
                    <input type='text' name="name" value={this.state.name}
                    onChange={this.tagChange}
                    placeholder="Press enter to add tags"/> 
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, {addTag})(TagInput)