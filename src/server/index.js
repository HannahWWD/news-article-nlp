// project endpoint 
let projectData = {};


const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');
var path = require('path')
const express = require('express')

// console.log(process.env.API_KEY)


const app = express()

// dependencies
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());


// setup server
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

// a POST route to store text input
app.post('/post-data', function (req, res) {
  const datafromApp = req.body;
  const newEntry = {
    text: datafromApp.text
  }
  Object.assign(projectData, newEntry)
  console.log(projectData)
  // you have to send something back, otherwise the promise will keep pending
  res.send(projectData)
})


// a GET route to get analysis result from the MeaningCloud API
app.get('/result', getAnalysisResult)


function getAnalysisResult(req, res) {
  console.log("server fetch function fired!");
  const txt = projectData.text;
  const url = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&txt=${txt}`
  let result = {};
  fetch(encodeURI(url), { method: 'POST' })
    .then(response => response.json())
    .then(function (data) {
      Object.assign(result, data)
      console.log(result)
      res.send(result);
    })
    .catch(error => { console.error("error is:", error) });

}
