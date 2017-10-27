import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getStuff } from '../../redux/reducers/reducer';
import { Link } from 'react-router-dom';
import CountDisplay from '../../components/CountDisplay/CountDisplay';
import './showStuff.css'

class ShowStuff extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            info: '',
            match: 'No match',
            number: 0
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        if( this.props.match.path === '/show-stuff' ) {
            this.setState({
                match: 'Match!'
            })
        }
    }

    handleChange( e ) {
        let value = e.target.value
        let name = e.target.name

        this.setState({
            [name]: value
        })
    }

    handleClear() {
        document.getElementById('form').reset()
    }

    handleSave() {
        let body = {
            title: this.state.title,
            info: this.state.info
        }

        axios.post( '/api/addStuff', body )
            .then( this.props.getStuff() )
                .then( alert( 'Your stuff has been added to the database!' ) )
    }

    render() {
        return(
            <div className='stuff-body' >
                <p>Make more stuff here!</p>

                <form id='form' >
                    <input onChange={e => this.handleChange(e)} placeholder='Title' name='title' />
                    <input onChange={e => this.handleChange(e)} placeholder='Info' name='info' />
                </form>
                
                <div>
                    <button onClick={() => this.handleClear()} >Clear</button>
                    <Link to='/' ><button onClick={() => this.handleSave()} >Save New Stuff</button></Link>
                </div>
                
                <br/><br/>
                <div>{this.state.match}</div>

                <br/><br/>
                <div className='stuff-box' >
                    <div>
                        <button onClick={() => this.setState({number: this.state.number - 1})} >-</button>
                        <button onClick={() => this.setState({number: this.state.number + 1})} >+</button>
                    </div>
                    <CountDisplay number={this.state.number} />
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

export default connect( mapStateToProps, { getStuff } )(ShowStuff);