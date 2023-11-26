const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000, () => {
    console.log('Server is listening on port 3000...')
});

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: ' This is a blog snippet'},
        {title: 'Yoshi finds eggs2', snippet: ' This is a second blog snippet'},
        {title: 'Yoshi finds eggs3', snippet: ' This is a third blog snippet'},
    ];
   res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
})

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

//app.use
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})