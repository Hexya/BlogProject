var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var PORT = process.env.PORT || 8080
var app = express();
var configDB = require('./config.js');
var config = require('./webpack.config');

app.use(express.static('build'));

app.use(bodyParser.urlencoded({extended:true}));//precise qu'on va use bodyParser et enlever mess d'erreur avec extended true
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/articles');//connect mongoose a notre base de donées
// mongoose.connect('configDB.dbUrl')
var articleSchema = mongoose.Schema({ //création du schema de base
  author:String,
  articleTitle:String,
  datePub:String,
  cat:String,
  img:String,
  desc:String
});
var Article = mongoose.model('Article', articleSchema);//création du model a l'aide du schema

var router = express.Router();//creation router pour gerer les requette
router.route('/')
  .get(function(req, res){
    Article.find(function(err, articles){
      if(err){
        res.send(err);
      }
      res.send(articles);
    });
  })
  .post(function(req, res){
    var article = new Article();
      article.author = req.body.author;
      article.articleTitle = req.body.articleTitle;
      article.datePub = req.body.datePub;
      article.cat = req.body.cat;
      article.img = req.body.img;
      article.desc = req.body.desc;
      article.save(function(err){
        if(err){
          res.send(err);
        }
        res.send({message:'Article created'})
      });
  });
  router.route('/:article_id')
    .get(function(req, res){
      Article.findOne({_id: req.params.article_id}, function(err,article){
        if(err){
          res.send(err)
        }
        res.send(article);
      })
    })
    .put(function(req,res){
      Article.findOne({_id: req.params.article_id}, function(err,article){
        article.author = req.body.author;
        article.articleTitle = req.body.articleTitle;
        article.datePub = req.body.datePub;
        article.cat = req.body.cat;
        article.img = req.body.img;
        article.desc = req.body.desc;
        article.save(function(err){
          if(err){
            res.send(err)
          }
          res.send({message:'Article updated'});
        });
      });
    })
    .delete(function(req,res){
        Article.remove({_id: req.params.article_id}, function(err){
          if(err){
            res.send(err);
          }
          res.send({message:'Article deleted'});
        });
    });

  app.use('/api', router); // on lui dit de use le router qu'on a créer

// using webpack-dev-server and middleware in development environment

if(process.env.NODE_ENV !== 'production') {
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpack = require('webpack');
  var config = require('./webpack.config');
  var compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html')
});

app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});
