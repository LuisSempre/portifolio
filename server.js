const express = require('express')
const nunjucks = require('nunjucks')

const server  = express()
const videos = require("./data")

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false
})

server.get('/', function(req, res){
    const about = {
        avatar_url: "https://avatars2.githubusercontent.com/u/32404639?s=460&v=4",
        name: "Luis Lucas",
        role: "FullStack",
        description: 'REACTJS NODEJS <a href="https://reactjs.org"></a>',
        links:[
            {name: "Linkedin", url: "https://www.linkedin.com/in/luis-lucas-a5b30737/" },
            {name: "Twitter", url: "https://twitter.com/LuisLucass" },
            {name: "Github", url: "https://github.com/LuisSempre" }
        ]
    }

    return res.render("about", { about })
})

server.get('/portifolio', function(req, res){

    return res.render('portifolio',{ items: videos})
})

server.listen(5000, function (){
    console.log('server is runnnig')
})