var express = require('express');
var app = express(); //whole express  functionalities mounted in the app variable

var cookieParser = require('cookie-parser');

var path = require('path');

var indexRouter = require('./routes/index')
var userRouter = require('./routes/users');

app.use((req,res,next) => {
  console.log("url"+ req.url,"method"+req.method, "ip"+req.ip);
  next();
})

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// Template
// setting path for view engine
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');


// create a cookie and send it two a browser
// 1.set cookie and send it to browser
app.use(cookieParser());

// middleware for cookies
app.use((req, res,next) =>{
  // Cookies that have not been signed
  res.cookie("name","shubh");
  console.log('Cookies: ', req.cookies);
  next();
})

app.use('/', indexRouter);
app.use('/users', userRouter);



//provide the port
app.listen(4000 ,()=>{
  console.log("you can see at port 4000");
});



