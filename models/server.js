const express = require('express')
var cors = require('cors')
require('dotenv').config()

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT

        this.paths = {}

        //Middlewares
        this.middlewares()

        //Rutas de mi aplicación
        this.routes()
    }

    middlewares(){
        //CORS
        this.app.use( cors() )

        //Directorio publico
        this.app.use( express.static('public') )
    }

    routes(){
        //this.app.use( this.paths.auth, require('../routes/auth') )
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Server is up and running at port ${this.port}`)
        })
    }
}

module.exports = Server;