var app = angular.module('firstAngularApp',[]);

app.controller('mainCtrl', function(){
  this.hello="hello world";
  this.fruits = ['orange','apple','banana'];
})

app.filter('makePlural', function(){
  return function(input){
    return input + "s"
  }
})
