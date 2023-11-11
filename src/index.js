require('dotenv').config()
const connectToDB = require( './db/index').connectToDB;
const app = require('./app.js').app;
const PORT = process.env['PORT'];

connectToDB()
.then(() => {
    const server = app.listen(PORT || 3000, () => {
        console.log(`Server listening on the port : ${PORT}`)
    })
    // here server is an instance of Node.js HTTP server
    // console.log(server instanceof require('http').Server);

    server.on('error', (err)=> {
        console.error(`Server error : ${err}`)
    })

    server.on('close', () => {
        console.log(`Server closed`)
    })
})
.catch((err) => {
    console.log('Error while making connection to MONGO DB :', err);
})


