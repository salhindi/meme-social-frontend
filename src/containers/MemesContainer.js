import React, { Component } from "react";
import {connect} from 'react-redux';
import Memes from "../components/Memes";
import { fetchMemes } from "../actions/fetchMemes";
import MemeForm from "../components/MemeForm";
import MemeShow from "../components/MemeShow";

import {Route, Switch} from 'react-router-dom';

class MemesContainer extends Component {


    componentDidMount() {
       this.props.fetchMemesNew()
    } 

    render() {
       
        return(
            <div>
                <Switch> 
                    <Route path='/memes/new' component={MemeForm} />
                    <Route path='/memes/:id' render={(routerProps) => <MemeShow {...routerProps} memes={this.props.memes}/>} />
                    <Route path='/memes' render={(routerProps) => <Memes {...routerProps}  memes={this.props.memes}/>} />
                    <Route path= '/' render={() => <h1> Route Doesn't Exist </h1>} />
                    
                </Switch>
            </div>
            )
        }
    }
    

    const mapStateToProps = gState => {
        return {
            memes: gState.memes
        }
    }   

    const mapDispatchToProps = dispatch => {
        return {
            fetchMemesNew: () => {
                return (
                    dispatch(fetchMemes())
                )
            } 
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(MemesContainer)
