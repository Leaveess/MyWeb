var express = require("express");
var app = express();
const fs = require("fs");
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
//
const Review = require('./review')
const reviewInstance = new Review();


app.use(express.static("style"));
app.use(express.static("images"));
app.use(express.json());

// Routes

app.get('/', function(req,res){

    res.render('index', { activePage: "home" })
})

app.get('/contact', function(req,res){

    res.render('contact', { activePage: "contact" })
})

app.get('/events', function(req,res){

  res.render('events', {activePage: "events"})
})

app.get('/news', function(req,res){

  res.render('news', {activePage: "news"})
})

app.get('/reviewP', function(req, res){

  const reviews = reviewInstance.getAllReviews();
  
  res.render('reviewP',{reviews: reviews ,activePage: "reviewP"})
})

app.get('/sample', function(req,res) {
  
  res.render('sample',{activePage: "sample"})
})

app.post('/reviewPost', function(req,res){

  var newReview ={
    username:req.body.username,
    review:req.body.review,
    shopName:req.body.shopName,
    shopLocation:req.body.shopLocation
  }
  
  reviewInstance.addNewReview(newReview);

  const reviews = reviewInstance.getAllReviews();

  res.redirect('/reviewP')
})

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    console.log("Up")
})