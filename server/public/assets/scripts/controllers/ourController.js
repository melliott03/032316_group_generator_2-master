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

        $scope.numberArray = [2,3,4,5,6,7,8,9,10,11];

        $scope.someFunction=function(data){
          console.log(data);
        }
      $scope.items = ["Enrique",
        "Tracey","Carl","Joette","Jeremy","Kenzie","Aaron","Evan","Biz","Brady","Roman","Thomas","Miles","Michelle","Neil","Hank","Mike E." ,"Mark"
      ];
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
