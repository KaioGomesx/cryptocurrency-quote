const express = require('express');
const axios = require('axios');

const app = express();

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(express.static('public'))

app.get('/coins', async (req, res) => {
    res.render('coins', { res })
})

app.listen(3000, () => console.log("Site Online"))