function PostsListController(mainSvc){
  // var vm = this;
  // const num = 50;
  // mainSvc.getPosts()
  // .then(function(response){
  //     vm.incompletePosts = response.data.splice(0,num)
  //     vm.completePosts = response.data
  //     //vm.posts = response.data;
  // })
}

app.component('postsList',{
  templateUrl: 'posts-list/posts-list.html',
  controller: PostsListController,
  controllerAs: 'vm', // defaults to $ctrl
  bindings:{
    posts:'<' // <= one way binding, = => two-way-binding
  }
})
