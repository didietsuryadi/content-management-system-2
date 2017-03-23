var express = require('express');
var router = express.Router();
var articleController = require('../controllers/articleController')
var auth = require('../helper/authentication')
/* GET users listing. */

router.get('/article/:id',auth.verify,articleController.readArticle);
router.get('/article',auth.verify,articleController.readArticles);
router.post('/article',auth.verify,articleController.createArticle);
router.put('/article/:id',auth.verify,articleController.updateArticle);
router.delete('/article/:id',auth.verify,articleController.deleteArticle);


module.exports = router;
