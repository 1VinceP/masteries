require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , chalk = require('chalk')
    , stuff_controller = require('./controllers/stuff_controller')

let app = express()
app.use( bodyParser.json() )
app.use( cors() )

massive( process.env.CONNECTION_STRING ).then( db => {
    console.log( chalk.magenta( 'Database Connected!' ) )
    app.set( 'db', db )
    app.get( 'db' ).init.seed().then( res => console.log( res ) )
} ).catch( err => console.log( err ) )


app.get( '/api/stuff', stuff_controller.getStuff )


let port = 3030
const portChalk = chalk.cyan.underline
app.listen( port, () => {
    console.log( portChalk( `Eavesdropping_on_port_${port}` ) )
} )