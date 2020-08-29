var app = angular.module('firstAngularApp',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: 'home.html'
    })
    .state('posts',{
      url:'/posts',
      template:'<posts-list></posts-list>'
    })
    .state('posts.incomplete',{
      url:'/incomplete',
      template:'<posts-list posts=vm.incompletePosts></posts-list>',
      controlerAs:'vm'
    })
    .state('posts.complete',{
      url:'/complete',
      template:'<posts-list posts=vm.completePosts></posts-list>',
      controllerAs:'vm'
    })
})

app.controller('mainCtrl', function(mainSvc,mainFact){
  var vm = this;
  mainSvc.getPosts()
  .then(response=>{
    this.incompletePosts = response.data.splice(0,50)
    this.completePosts = response.data
  })
})

app.filter('makePlural', function(){
  return function(input){
    return input + "s"
  }
})

app.service('mainSvc',function($http){
  this.getPosts = function(){
    return $http.get('https://jsonplaceholder.typicode.com/posts');
  }
})

app.factory('mainFact',function($http){
  var getPosts = function(){
    return $http.get('https://jsonplaceholder.typicode.com/posts');
  };

  return{
    getPosts
  }
})
