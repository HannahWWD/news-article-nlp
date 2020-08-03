# Evaluate a news article with NLP

by Hannah Wu

Since the Aylien API has been stopped working, I am using the MeaningCloud API to fulfill the requirements. However, the MeaningCloud API only works with http/ftp URLs, which are rarely found nowadays, especially for official new websites. In order to make it more user-friendly, **the App will only accept text inputs, instead of URL addresses, to make the requests**.

## Getting started

This instruction is for general access from GitHub.

**IMPORTANT** 
You will need to obtain an API KEY from MeaningCloud. 
(https://www.meaningcloud.com/developer/getting-started)

- create a `.env` file in the root of the directory and fill:

```
API_KEY = e454r57t********
```

**Note: For you convenience, a valid API key is included in the  `.env.example` file.**

- type in following commands in your terminal to build the project

```
npm install
npm run build-prod
npm run start 
```

In this step the App should work properly at port 3000.

- To run Jest tests, use `npm run test` .

- To use development mode, run `npm run build-dev`. Website will automatically open in your browser. At the same time, run `npm run start` to open the local server.


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



## inputChecker.js

Please note that this function is to check if the text input:

- is empty
- is written in English
- is *NOT* an URL address








