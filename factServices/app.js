var app = angular.module('firstAngularApp',[]);

app.controller('mainCtrl', function(mainSvc,mainFact){
  var vm = this;
  mainFact.getPosts()
  .then(function(response){
      vm.posts = response.data;
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
    getPosts:getPosts
  }
})
