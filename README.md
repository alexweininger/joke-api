# Joke API

An API for jokes!  This API is primarily for getting a random joke from a growing list of jokes hosted here.  The API uses Azure functions.  Got funny jokes?  See how to submit your jokes down below!

## API Endpoints

### Get a random joke

[https:/joke-api/azurewebsites.net/api/joke/](https:/joke-api/azurewebsites.net/api/joke/)

returns

```javascript
{
  "id": 56,
  "type": "programming",
  "setup": "How do you check if a webpage is HTML5?",
  "punchline": "Try it out on Internet Explorer"
}
```

### Get a random joke of a specific type

[https:/joke-api/azurewebsites.net/api/joke/?joketype=type](https:/joke-api/azurewebsites.net/api/joke/?joketype=type)
types of jokes: general, programming, knock-knock (feel free to add jokes outside of these types)

## Contributing a joke

Submit a Pull Request, with your joke added to the jokes/index.json file. Be sure to use this format when adding your joke:

```javascript
{
  "id": <one higher than the previous joke>,
  "type": "your joke's type",
  "setup": "your joke's setup line",
  "punchline": "your joke's punchline"
}
```

## Built With

* [Azure functions](https://docs.microsoft.com/en-us/azure/azure-functions/) - Cloud service, highly recommended
* [Node.js](https://nodejs.org/en/docs/) - Serverside scripting (in Azure)

## Installing

coming soon

## License

<<<<<<< HEAD
This project is licensed under the MIT License - see the [LICENSE.md](/LICENSE.md) file for details
=======
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/alexweininger/joke-api/blob/master/LICENSE) file for details
>>>>>>> 67d24df3a31d2ccf1595f18df7ed7aa0973681fc

## Acknowledgments

* Inspired by [this repository](https://github.com/15Dkatz/official_joke_api).
