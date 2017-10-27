import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStuff } from '../../redux/reducers/reducer';
import './header.css'

class Header extends Component {
    constructor() {
        super();

        this.state = {
            
        }
    }

    componentDidMount() {
        this.props.getStuff()
    }

    render() {
        return(
            <header className='header-body'>
                
            </header>
        )
    }
}

function mapStateToProps( state ) {

    return { state }
}

export default connect( mapStateToProps, { getStuff } )(Header);