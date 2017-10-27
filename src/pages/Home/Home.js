import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getStuff } from '../../redux/reducers/reducer';
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
        if( nextProps.state ) {
            this.setState({
                stuff: nextProps.state.stuff
            })
        }
        
    }

    handleLiked( id ) {
        axios.put( `/api/likeStuff/${id}` )
            .then( () => this.props.getStuff() )
    }

    handleDelete( id ) {
        axios.delete( `/api/deleteStuff/${id}` )
            .then( () => this.props.getStuff() )
    }

    render() {

        let mappedStuff = this.state.stuff.map( ( stuff, i ) => {
            return (
                <div className='home-stuff' key={i}>
                    <button onClick={() => this.handleLiked(stuff.id)} >{ stuff.liked + '' }</button>
                    <span className=''>{ stuff.title }</span>
                    <button onClick={() => this.handleDelete(stuff.id)} >DELETE</button>
                    <br/>
                    <div>{stuff.info}</div>
                </div>
                
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

function mapDispatchToProps() {
    return { getStuff }
}

export default connect( mapStateToProps, mapDispatchToProps )(Home);