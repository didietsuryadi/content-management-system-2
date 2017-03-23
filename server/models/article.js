var mongoose = require('mongoose')
var Schema = mongoose.Schema

var articleSchema = new Schema({
  title: String,
  content: String,
  author:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
},{
  timestamps:true
})

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
