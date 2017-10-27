import React, { Component } from 'react';

export default function CountDisplay( props ) {

    return(
        <div style={{color: 'white'}}>
            {props.number}
        </div>
    )
}