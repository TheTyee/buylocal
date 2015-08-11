var express = require('express');
var router = express.Router();




//home page display
router.get('/', function(req, res) {
 

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
module.exports = router;
