import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './home.css'

class Home extends Component {
    constructor() {
        super();

        this.state = {
            stuff: []
        }
    }

    componentWillReceiveProps( nextProps ) {
        this.setState({
            stuff: nextProps.state.stuff
        })
    }

    render() {

        let mappedStuff = this.state.stuff.map( ( stuff, i ) => {
            return (
                <span key={i}>{ stuff.title }</span>
            )
        } )

        console.log( this.state.stuff )
        return(
            <div className='home-body'>
                <p>Welcome to the home page!!</p>
                <Link to={{ pathname: '/show-stuff', query: { stuff: this.props.stuff } }} ><button>To Stuff Page</button></Link>
                <div id='box'>
                    { mappedStuff }
                </div>

            </div>
        )
    }
}

function mapStateToProps( state ) {

    return {
        state
    };
}

export default connect( mapStateToProps, {} )(Home);