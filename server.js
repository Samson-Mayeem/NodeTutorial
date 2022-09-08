const express = require('express')

const app = express()
const car = require('./cars')

app.use(express.json())
app.use(express.static('public'))

app.set('view engine', 'ejs')
// creating routes

app.get('/', (req, res, next)=>{
    res.render('index', {name: "Samson", cars : car})
    next()
})

app.get('/car', (req, res, next) =>{
    res.json(car)
    next()
})
 
app.post('/car', (req, res, next) =>{
    car.push({
    name: req.body.name,
    model: req.body.model,
    size: req.body.size
})
res.json({
    status:200,
    message: 'data successfully submitted'
})
    next()
})

app.listen(5000, (err, res)=>{
    if(err){
        console.log(err)
    }else{
        console.log("app listening to port 5000...")
    }
})