const express = require('express')
const app = express()
const morgan = require('morgan')
const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3')
const personalityRouter = express.Router()

//Other Imports
require('dotenv').config()
const path = require("path")
const PORT = process.env.PORT || 8000

//MiddleWare
app.use(morgan('dev'))
app.use(express.json())
app.use('/results', personalityRouter)
app.use(express.static(path.join(__dirname, "client", "build")))


personalityRouter.post('/', (req, res) => {
    const personalityInsights = new PersonalityInsightsV3({
        version_date: `2017-10-13`,
        iam_apikey:`${process.env.KEY}`,
        url: `https://gateway.watsonplatform.net/personality-insights/api`,
        
    })
    console.log(req)
    const profileParams = {
        content: req.body.content,
        content_type: 'text/plain',
        raw_scores: true
    }
    personalityInsights.profile(profileParams, function(error, response){
        console.log(error)
        console.log(response)
        if(error){
            res.status(500)
            return res.send(error)
        }else {
            res.status(200)
            return res.send(response, null, 2)
        }
    })
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log("server is running on port 6000")
})

