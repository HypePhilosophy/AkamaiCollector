const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('cors');

app.use(cors());

app.use(express.static('public'));
app.set('view engine', 'html');

app.get('/', (req, res, next) => {
    res.render('/index');
});

io.on('connection',(socket) => {
    console.log('a user connected');
});

app.listen(80, () => console.log('Example app listening on port 3000!'));