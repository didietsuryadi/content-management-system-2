var app = new Vue({
  el: '#app',
  data: {
    title:'',
    content: '',
    articles: [],
    token: localStorage.getItem("token"),
    username: localStorage.getItem("username"),
    userid: localStorage.getItem("userid")
  },
  methods: {
    getArticle: function () {
      axios.get('http://localhost:3000/api/article',
      {headers: {token: app.token}}
    ).then(function (res) {
      app.articles = res.data
    }).catch(function (err) {
      console.log(err);
    })
  },
  addArticle: function () {

  },
  resetButton: function () {
    app.title = ""
    app.content = ""
  }
}
})

app.getArticle()
