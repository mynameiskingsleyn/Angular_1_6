function PostsListController(mainSvc){
  var vm = this;
  const num = 50;
  this.selectedOption="title";
  this.search="";
  mainSvc.getPosts()
  .then((response)=>{
       this.incompletePosts = response.data.splice(0,num)
       this.completePosts = response.data
       //this.posts = response.data;
  });
}

app.component('postsList',{
  templateUrl: 'posts-list/posts-list.html',
  controller: PostsListController,
  controllerAs: 'vm', // defaults to $ctrl
  bindings:{ // <= one way binding, = => two-way-binding
    keyd: '@'
  }
})
