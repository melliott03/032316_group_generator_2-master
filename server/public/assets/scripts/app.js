var myApp = angular.module('myApp', ['ngRoute']);

// Array Shuffle (Stack Overflow)
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

      myApp.controller('Ctrl', function($scope){
      $scope.items = ['socks','shoes','cats','dogs','urrg','window','doors','front','back','lion','tiger'];

          $scope.items = shuffle($scope.items);
      }).
      filter('modulo', function(){
        return function (arr, num, val) {
            // debugger;
            return arr.filter(function(item, index){
                return index % num === (val || 0);
            })
        };
      });


// }]);


myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when("/two", {
            templateUrl: "/views/routes/two.html",
            // controller: "SomeController"
        }).
        when("/three", {
            templateUrl: "/views/routes/three.html",
            // controller: "ProjectsController"
        }).
        when("/four", {
            templateUrl: "/views/routes/four.html",
            // controller: "AesopController"
        }).
        otherwise({
            redirectTo: 'two'
        })
}]);


//
// // BIZZZZZZ
// myApp.controller("MyController", ["$scope", "$http", function($scope, $http){
//     $scope.kappaArray = [];
//
//     $scope.getStudents = function(){
//         $http.get("/kappans").then(function(response){
//           $scope.kappaArray = shuffle(response.data.students);
//           console.log($scope.kappaArray);
//
//         });
//         console.log('hey');
//       };
//       $scope.getStudents();
//
//
//
