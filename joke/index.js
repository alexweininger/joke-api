var jokes = require('../jokes/index.json');

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log(req.query);
    if (req.query.joketype || (req.body && req.body.joketype)) {
        let joke = getRandomElement(getType(req.query.joketype, jokes));
        context.res = {
            body: JSON.stringify(joke)
        }
    } else {
        let joke = getRandomElement(jokes)
        context.res = {
            body: JSON.stringify(joke)
        };
    }
    context.done();
};

function getRandomElement(array) {
    let randIndex = Math.floor(Math.random() * array.length);
    return array[randIndex];
}

function getType(type, jokes) {
    let jokeArray = [];
    for (let joke of jokes) {
        if (joke.type == type) {
            jokeArray.push(joke);
        }
    }
    return jokeArray;
}

function getJokeById(id, jokes) {
    for (let joke of jokes) {
        if (joke.id === id) {
            return joke;
        }
    }
}