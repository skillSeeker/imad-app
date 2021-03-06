var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
var count=0;
app.get('/counter',function(req,res){
   count++;
   res.send(count.toString()); 
});

var content={
'article-one':    
{
    title:"Sparsh",
heading:'Article One',
date:"5 Sept 2017"
},
'article-two':{
     title:"Sparsh",
heading:'Article two',
date:"10 Sept 2017"
},
'article-three':{
    title:"Sparsh",
heading:'Article three',
date:"15 Sept 2017"
}
    
    
};

function createTemplate(data){
var title=data.title;
var heading=data.heading;
var date=data.date;
var htmlTemplate=
    `<html>
    <title>
       ${title}
    </title>
    <meta name="viewport" content="width-device-width, initial-scale=1">
    <style>
        .container{
            max-width:800px;
            margin:0 auto;
            color:grey;
            font-family:Lobster;
        }
    </style>
    <body>
        <div class="container">
            <a href="/">Home</a>
        <hr>
        <h3>
            ${heading}
        </h3>
        <h6>
        ${date};
        </h6>
        <div>
            <p>This is the first Article.This is the first Article.This is the first Article.This is the first Article.This is the first Article.This is the first Article.This is the first Article.This is the first Article.This is the first Article.This is the first Article.This is the first Article.This is the first Article.This is the first Article.This is the first Article.This is the first Article.This is the first Article.</p>
        </div>
        
    </div>
    </body>
</html>`;
return htmlTemplate;
}
app.get('/:articleName', function(req,res){
    var article=req.params.articleName;
    res.send(createTemplate(content[article]));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
