const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use('/assets',express.static(path.join(__dirname,'dist','assets')))
app.use('/images',express.static(path.join(__dirname,'dist','images')))
app.use('/js',express.static(path.join(__dirname,'src','js')))

app.get('/',(req,res) => {
    res.sendfile('chat-bot-s2.html', {
        root: path.join(__dirname,'src','html')
    })
});

app.listen(PORT,() => {
    console.log('Server listen in port:',PORT);
})