require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;
//Handlebar
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estatico
app.set('view engine', 'hbs');
app.use(express.static('public'))




app.get('/',  (req, res)=> {
    res.render('home',{
      nombre:'felipe beltran',
      titulo:'Curso node '
    })
  })
app.get('/generic',  (req, res)=> {
    res.render('generic',{
      nombre:'felipe beltran',
      titulo:'Curso node '
    })
  })
app.get('/elements',  (req, res)=> {
    res.render('elements',{
      nombre:'felipe beltran',
      titulo:'Curso node '
    })
  })




app.get('*',  (req, res)=> {
    res.sendFile(__dirname+'/public/back/404.html')
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })