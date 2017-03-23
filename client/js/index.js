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
      axios.post('http://localhost:3000/api/article',
      {
        title: app.title,
        content: app.content,
        author: app.userid
      },{
        headers: {token: app.token}
      }
    ).then(function (res) {
      if(res.data.title == app.title){
        swal("Good job!", "Article Posted", "success")
      }else{
        swal("Oh No!", "Something wrong", "failed")
      }
    }).catch(function (err) {
      console.log(err);
    })
  },
  deleteArticle:function (id) {
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this article!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      closeOnConfirm: false
    },
    function(){
      axios.delete('http://localhost:3000/api/article/'+id,
      {headers: {token: app.token}}
      ).then(function (res) {
        app.getArticle()
        swal("Deleted!", "Your imaginary file has been deleted.", "success");
      }).catch(function (err) {
        console.log(err);
      })
    });
  },
  resetButton: function () {
    app.title = ""
    app.content = ""
  }
  }
  })

  var nav = new Vue({
    el: '#nav',
    methods: {
      logout:function () {
        localStorage.removeItem("userid")
        localStorage.removeItem("username")
        localStorage.removeItem("token")
        window.location.href = 'http://127.0.0.1:8080/login.html'
      }
    }
  })
  app.getArticle()
