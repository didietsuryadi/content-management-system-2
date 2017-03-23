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

  },
  readArticles: function () {

  },
  readArticle: function () {

  }
}
