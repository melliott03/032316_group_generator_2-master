// var myApp = angular.module('myApp', []);
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

      var myApp = angular.module('myApp', []).
      controller('Ctrl', function($scope){
      $scope.items = [];
          for (var i = 0; i < 15; ++i) {
              $scope.items.push('item ' + i);
          }
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




//
