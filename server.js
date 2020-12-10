const express = require('express');
var cors = require('cors');
var data = require('./data');
var bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3002;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.send('Welcome to Image Quiz API quiz id');
});
app.post('/place', (request, response) => {
    let metadata = data.quizzes.map(x => {
        return {name: x.name, id: x.id, picture: x.picture};
    });

    response.json(metadata);
});
app.get('/places', (request, response) => {
    let metadata = data.quizzes.map(x => {
        return {name: x.name, id: x.id, picture: x.picture};
    });

    response.json(metadata);
});
app.post('/review/:placeid', (request, response) => {
    let id = request.params.id;
    let found = data.quizzes.find(x => x.id === Number(id));
    if (found) {
        response.json(found.questions);
    } else{
        response.status(404).json({error:`Quiz with id ${id} does not exist`});
    }
});

app.get('/search/:searchTerm/:location', (request, response) => {
    let username = request.body.username;
    let id = request.body.id;
    let score = request.body.score;
    data.scores.push({score: score, id: id, username: username});
    response.json({message: 'The score was added successfully.'});
});


app.listen(port, () => {
    console.log(`near by places API listening on port ${port}!`)
})