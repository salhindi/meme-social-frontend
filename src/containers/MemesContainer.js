import React, { Component } from "react";
import {connect} from 'react-redux';
import Memes from "../components/Memes";
import { fetchMemes } from "../actions/fetchMemes";
import MemeForm from "../components/MemeForm";

class MemesContainer extends Component {

    componentDidMount() {
       this.props.fetchMemes()
        // fetch('http://localhost:3000/api/v1/memes')
        // .then(resp => resp.json)
        // .then(data => console.log(data))
    }

    render() {
        return(
            <div>
                <MemeForm />
                <Memes />
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
