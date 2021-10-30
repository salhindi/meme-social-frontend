import React, { Component } from "react";

export default class MemeForm extends Component {
    state = {title: '', 
            top_text: '',
            bottom_text: '',
            featured_image: null}

    onImageChange = event => { 
        this.setState({ featured_image: event.target.files[0] });
    };

    render() {
        return(
            <div>
               <form>
                   <label>Title: </label>
                   <input type='text' placeholder='Title Your Meme Here' value={this.state.title}/><br /> 
                   <label>Top Text: </label>
                   <input type='text' value={this.state.top_text}/><br />
                   <label>Bottom Text: </label>
                   <input type='text' value={this.state.bottom_text}/><br />
                    <label> Upload File: </label>
                   <input type="file" accept="image/*" multiple={false} onChange={this.onImageChange} />


               </form>
            </div>
        )
    }
}