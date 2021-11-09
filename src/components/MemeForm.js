import React, { Component } from "react";
import {connect} from 'react-redux'
import {addMeme} from '../actions/addMeme'
// import { DirectUpload } from 'activestorage';
// import axios from 'axios';


class MemeForm extends Component {
    state = {title: '', 
            top_text: '',
            bottom_text: '',
            featured_image: null
            }

    onTextChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    onImageChange = event => { 
        this.setState({
            featured_image: event.target.files[0]
        })
    };


    onSubmitMeme = event => {
        event.preventDefault()
        const formData = new FormData();
    formData.append('title', this.state.title);
    formData.append('top_text', this.state.top_text);
    formData.append('bottom_text', this.state.bottom_text);
    formData.append('featured_image', this.state.featured_image);    
        this.props.addMeme(this.state)
        this.setState({title: '', 
        top_text: '',
        bottom_text: '',
        featured_image: '',
    }
       )
       this.props.history.push('/memes');
    }
  
    render() {
        return(
            <div>
               <form onSubmit={this.onSubmitMeme}>
                   <label>Title: </label>
                   <input type='text' placeholder='Title Your Meme Here' value={this.state.title} name='title' onChange={this.onTextChange} /><br /> 
                   <label>Top Text: </label>
                   <input type='text' value={this.state.top_text} name='top_text' onChange={this.onTextChange}/><br />
                   <label>Bottom Text: </label>
                   <input type='text' value={this.state.bottom_text} name='bottom_text' onChange={this.onTextChange} /><br />
                    <label> Upload File: </label>
                   <input type="file" name="featured_image" accept="image/*" multiple={false} onChange={this.onImageChange} />< br />

                <input type="submit" />
               </form>
            </div>   
        )
        
    }
}
export default connect(null, {addMeme})(MemeForm)