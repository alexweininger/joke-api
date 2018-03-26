var jokes = require('../jokes/index.json');
module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.joketype || (req.body && req.body.joketype)) {
        context.log('joketype=' + req.query.joketype)
        var jokesOfType = [];
        for (joke in jokes) {
            if (joke.type == req.query.joketype) {
                jokesOfType.push(joke);
                context.log('joke');
            }
        }
        let random_index = Math.floor(Math.random() * jokesOfType.length);
        var rjoke = jokesOfType[random_index];
        context.res = {
            body: JSON.stringify(rjoke)
        }
    } else {
        let random_index = Math.floor(Math.random() * jokes.length);
        var r_joke = jokes[random_index];
        context.res = {
            body: JSON.stringify(r_joke)
        };
    }

    context.done();
};