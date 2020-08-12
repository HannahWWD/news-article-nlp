# Evaluate A News Article with NLP

A responsive web app that automatically generates sentiment analysis results for news articles through a Natural Language Processing API.

Features: current version is eligible to detect plain text input and produces attitude summaries regarding to agreement, subjectivity, irony, and confidence levels.

 _the App will only accept text inputs, instead of URL addresses, to make the requests._


## Getting Started

### Install Node.js

Before you start, you will need to install [Node.js](https://nodejs.org/en/) on your computer.

### Get Your Own API Key

Obtain an API KEY from MeaningCloud. 
(https://www.meaningcloud.com/developer/getting-started)

Then, create a `.env` file in the root of the directory and fill :

```
API_KEY = e454r57t********
```

_Note: You can find an example in `env.example`._


### Install App

Type in following commands in your terminal to build the project:

```
npm install
npm run build-prod
npm run start 
```

**In this step the App should work properly at port 3000.**

### Test

To run Jest tests, use `npm run test` .

### Development Mode

To use development mode, run `npm run build-dev`. Website will automatically open in your default browser. At the same time, run `npm run start` to open the local server.


## App Usage

- Paste the article into the textarea.

- Submit the article and you can get the analysis results on the right. It might take a few seconds depends on the length of the article.

### Notes for Usage

- Due to API limitation, this app will only accept plain text input
URL input will return an error.
- It might take a few seconds to get the result.
- The App only works with English content.

### An Sample Article (source: CNN)

Zuckerberg pressed on how Facebook grants competitors access to its platform
From CNN Business' Brian Fung

Rep. Demings cited an employee who said: “I am 100% in favor of removing [Facebook’s API access] from Pinterest, but I am not recommending removing it from Netflix going forward.”

“Why would Facebook product managers want to restrict Pinterest’s access to Facebook, but not Netflix?” Demings asked Zuckerberg.

Zuckerberg responded that Facebook “used to have a policy that restricted competitors from using our platform, and Pinterest is a social competitor with us.”

Demings said Zuckerberg’s reply seemed to indicate that Facebook is willing to use its platform policies to discriminate against and undermine competitors.


## License

This app is a free software, and may be redistributed under the terms specified in the [LICENSE](LICENSE) file.







