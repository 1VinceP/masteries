import axios from 'axios';

const GET_STUFF = 'GET_STUFF'

let initialState = {
    stuff: []
}

export default function reducer( state = initialState, action ) {
    console.log( action.type )
    switch( action.type ) {
        case GET_STUFF + '_FULFILLED':
            return Object.assign( {}, state, { stuff: action.payload } )
    }
}

export function getStuff() {
    let stuff = axios.get( '/api/stuff' )
        .then( response => {
            console.log( response )
            return response.data
        }  )

    return {
        type: GET_STUFF,
        payload: stuff
    }
}