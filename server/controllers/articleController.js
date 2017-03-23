var Article = require('../models/article')
module.exports = {
  createArticle: function () {
    Article.create({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
    }, function (err, data) {
      if (err) {
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  updateArticle: function () {
    Article.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  deleteArticle: function () {
    Article.findOneAndRemove({_id:req.params.id}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readArticles: function () {
    Article.find()
    .populate('author')
    .then(function (data) {
      res.json(data)
    })
    .catch(function (err) {
      res.json(err)
    })
  },
  readArticle: function () {
    Article.findOne({_id:req.params.id})
    .populate('author')
    .then(function (data) {
      res.json(data)
    })
    .catch(function (err) {
      res.json(err)
    })
  }
}
