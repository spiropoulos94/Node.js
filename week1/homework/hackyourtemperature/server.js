const express = require('express')
const app = express()
var exphbs = require('express-handlebars');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));





app.get("/", (req, res) => {
    res.render('index')
})

app.post("/weather", (req, res) => {
    const cityName = req.body.cityName
    res.send(cityName)
})

app.listen(3000, () => { console.log("It's Alive!!!!!") })

