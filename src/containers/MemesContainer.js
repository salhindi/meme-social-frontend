import React, { Component } from "react";
import {connect} from 'react-redux';
import Memes from "../components/Memes";
import { fetchMemes } from "../actions/fetchMemes";
import MemeForm from "../components/MemeForm";

class MemesContainer extends Component {

    componentDidMount() {
       this.props.fetchMemes()
    }

    render() {
        return(
            <div>
                <MemeForm />
                <Memes memes={this.props.memes}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        memes: state.memes
    }

}

export default connect(mapStateToProps, {fetchMemes})(MemesContainer)
