console.log('inside ourController');

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

      myApp.controller('OurController', function($scope){
      $scope.items = ['socks','shoes','cats','dogs','urrg','window','doors','front','back','lion','tiger'];
        console.log('Ctrl');
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
