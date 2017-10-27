module.exports = {

    getStuff: ( req, res, next ) => {
        req.app.get('db').get_stuff()
            .then( response => res.status(200).send( response ) )
    },

    addStuff: ( req, res, next ) => {
        const { title, info } = req.body

        req.app.get('db').add_stuff( title, info )
            .then( response => res.status(200).send( response ) )
    },

    deleteStuff: ( req, res, next ) => {
        req.app.get('db').delete_stuff( req.params.id )
            .then( response => res.status(200).send( response ) )
    },

    likeStuff: ( req, res, next ) => {
        req.app.get('db').like_stuff( req.params.id )
            .then( response => res.status(200).send( response ) )
    }

}