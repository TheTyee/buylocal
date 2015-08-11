var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// Database
var mongo = require('mongoskin');
var db = mongo.db("mongodb:107.170.230.98/loveletters", {native_parser:true});

//Json Files - available in all templates
app.locals.elPrizes = require('./jsons/prizes.json');
app.locals.vancityBusiness = require('./jsons/vancityBusiness.json'); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req,res,next){
    req.db = db;
    next();
});

//Vancity business


//home page display
app.get('/', function(req, res) {
 

 //Send to template
  
  db.collection('loveletters').find({}, null, {
    limit: 6,
     sort: {
     'entryID': -1
   }}).toArray(function(err, articles) {
    res.render('index', {
      letters: articles
    }
  )
});
});

//Card display
app.get('/cards/:letter?/:success?', function(req, res, next) {
  var letter = req.params.letter,
      success = req.params.success,
      elid    = letter,
      content,
      confirmation = false;

  console.log(elid);
  if(success == 'success'){
    confirmation = true;


  }


  if(letter){
    db.collection('loveletters')
      .find({entryID: letter})
      .toArray(function(err, results){
         content = results;
         console.log(results);
      })
  }

  //Send to template
  
  db.collection('loveletters').find({}, null, {
   sort: {
     'entryID': -1
   }}).toArray(function(err, articles) {
    res.render('letters', {
      individual: content,
      success: confirmation,
      letters: articles,
      theletter:    elid,
    }
  )
});
});

//Prize display

app.get('/prizes', function(req,res,next){
 res.render('prizes', {  });

})

//Form display

app.get('/form', function(req,res,next){
 res.render('form', {  });

})

app.get('/get/json/:id', function(req,res){
  var letter = req.params.id;

  db.collection('loveletters')
    .find({entryID: letter})
    .toArray(function(err, results){
      res.jsonp(results)
    })
  
})

app.get('/get/card/:id', function(req,res,next){
  var letter = req.params.id,
      content;

  db.collection('loveletters')
    .find({entryID: letter})
    .toArray(function(err, results){
       content = results;
       console.log(results);

       res.render('letter-snippet', { 
       individual: content,
        });
    })

  

})
//Not sure about this


// app.use('/', routes);
app.use('/users', users);



//Take wufoo data: not using handshake.  
app.post('/', function (req, res) {
  var letter = takeLoveLetter(req),
      db = req.db;

      db.collection('loveletters').insert(letter, function(err, result){
             res.send(
                 (err === null) ? { msg: '' } : { msg: err }
             );
         });
     
  res.send('Got a POST request');
})



/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

//Functions

//Take wufoo data and make a new object for mongo

function takeLoveLetter(l){
    var firstName = l.body.Field1,
        lastname  = l.body.Field2.charAt(0),
        letter    = l.body.Field5.replace(/[\r\n]+/g, "<br><br>"), //Line breaks html-friendly
        website   = l.body.Field122,
        business  = l.body.Field7,
        showName = l.body.Field11.substring(0,3),
        city      = l.body.Field8,
        shebam;

//Will have to write some anonymous logic when form language changes
    shebam = { 
      "name": firstName, 
      "lastinitial": lastname,
      "letter": letter, 
      "showName": showName, 
      "website": website,
      "business": business,
      "city": city,
      "date": l.body.DateCreated,
      "entryID": l.body.EntryId
    }

      

        console.log(l.body);
        console.log(shebam);
        return(shebam);




}
