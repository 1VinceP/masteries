module.exports = {

    getStuff: ( req, res, next ) => {
        console.log( 'made it here' )
        req.app.get('db').get_stuff()
            .then( response => res.status(200).send( response ) )
    }

}