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
      template:'<ui-view></ui-view>'
    })
    .state('posts.incomplete',{
      url:'/incomplete',
      template:'<posts-list posts=vm.incompletePosts keyd=incomplete></posts-list>',
      controlerAs:'vm'
    })
    .state('posts.complete',{
      url:'/complete',
      template:'<posts-list posts=vm.completePosts keyd="complete"></posts-list>',
      controllerAs:'vm'
    })
})

app.controller('mainCtrl', function(mainSvc,mainFact){
  var vm = this;
  this.search = "dg";
  // mainSvc.getPosts()
  // .then(response=>{
  //   this.incompletePosts = response.data.splice(0,50)
  //   this.completePosts = response.data
  // })
})

app.filter('objFilter',function(){
  return function(input,value,loc){
    console.log(input);
    if(typeof input === 'object'){
      var newInput = input.filter(function(obj){
        if(!loc){
          return true;
        }
        if (obj.hasOwnProperty(loc)){
          for( var k in obj){
            if (~k.search(loc)){
              //console.log(~obj[k].search(value))
              return ~obj[k].search(value);
            }
          }
          return false;
        }else{
          return false
        }
      })

    }
    return newInput;
  }
})

const seiver = function(obj){

}

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
