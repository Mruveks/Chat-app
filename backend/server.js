const express = require('express');
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')

const app = express();
const rooms = ['general', 'tech', 'finance', 'crypto'];

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use('/users', userRoutes)
require('./connection')

const server = require('http').createServer(app);
const PORT = 3001;
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

server.listen(PORT, () => {
    console.log("Listening to port", PORT)
})