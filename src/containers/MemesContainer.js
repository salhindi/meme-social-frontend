import React, { Component } from "react";
import {connect} from 'react-redux';
import Memes from "../components/Memes";
import { fetchMemes } from "../actions/fetchMemes";
import MemeForm from "../components/MemeForm";
import MemeShow from "../components/MemeShow";
import {Route} from 'react-router-dom';

class MemesContainer extends Component {
    

    componentDidMount() {
       this.props.fetchMemes()
    }

    render() {
        return(
            <div>
                <Route path='/memes/new' component={MemeForm} /><br />
                <Route path='/memes/:id' render={(routerProps) => <MemeShow {...routerProps} memes={this.props.memes}/>} />
                <Route exact path='/memes' render={(routerProps) => <Memes {...routerProps}  memes={this.props.memes}/>} />

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
