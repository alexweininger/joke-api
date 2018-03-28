# Joke API

An API for jokes!  This API is primarily for getting a random joke from a growing list of jokes hosted here.  The API uses Azure functions.  Got funny jokes?  See how to submit your jokes down below!

## Getting Started, prereqs

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

* [Azure](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Node.js](https://maven.apache.org/) - Dependency Management

## Contributing


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Inspired by [this repository](https://github.com/15Dkatz/official_joke_api).
