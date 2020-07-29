# Evaluate a news article with NLP

by Hannah Wu

Since the Aylien API has been stopped working, I am using the MeaningCloud API to fulfill the requirements. However, the MeaningCloud API only works with http/ftp URLs, while https URLs are the most widely used for news websites. In order to make it more user-friendly, *the App will only accept text inputs, instead of URL inputs, to make the requests*.

## Getting started

### If you are using with the Zip file (for Udacity only)

Zip file is only available for the purpose of assignment submission for Udacity Project 4. The node_module, dist folder, and a .env file with an API key are included in the Zip. No need to do extra setups.

- If you are using the Zip File, simple run `npm run start` to open the App at port 3000.
- To run Jest tests, use `npm run test` . 
- If necessary, use `npm run build-prod` to rebuild the App in production mode.
- To use development mode, run `npm run build-dev`. Website will automatically open in your browser.


### If you are accessing from GitHub

This instruction is for general access from GitHub.

*IMPORTANT* you will need to obtain an API KEY from MeaningCloud. 
(https://www.meaningcloud.com/developer/getting-started)

- create a `.env` file in the root of the directory and fill:

```
API_KEY = e454r57t********
```

Note: you can also checkout the .env.example file.

- type in following commands in your terminal to build the project

```
npm install
npm run build-prod
npm run start 
```

In this step the App should work properly at port 3000.

- To run Jest tests, use `npm run test` .

- To use development mode, run `npm run build-dev`. Website will automatically open in your browser.


## App Usage

- Paste the article into the textarea.
- Submit the article and you can get the analysis results on the right. It might take a few seconds depends on the length of the article.

### Notes for Usage

Due to API limitation, this app will only accept plain text input
URL input will return an error.
It might take a few seconds to get the result.
The App only works with English content.

## inputChecker.js

Please note that this function is to check if the text input:

- is empty
- is written in English
- is *NOT* an URL 








