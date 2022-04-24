
// alternates the string case of each character of the string this function is used on
String.prototype.toAlternatingCase = function () {
    arr = []
    for(let i = 0; i < this.length; i++){
      if(this.charAt(i) === this.charAt(i).toLowerCase()){
        arr.push(this.charAt(i).toUpperCase())
      }
      else if(this.charAt(i) === this.charAt(i).toUpperCase()){
        arr.push(this.charAt(i).toLowerCase())
      }
      else{
        arr.push(' ')
      }
    }
    
    return arr.join('')
  }



  function findLongest(str) {
  
    var spl = str.split(" ");
    var longest = 0
    
    for (var i = 0; i < spl.length; i++) {
      if (spl[i].length > longest) {
        longest = spl[i].length
      }
      }
      return longest
  }






  var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    const catYears = (humanYears) => {
      let total = 0
      if(humanYears > 0){
        total += 15
        if(humanYears > 1){
          total += 9
          if(humanYears > 2){
            total += 4 * (humanYears - 2)
          }
        }
      }
      return total
    }
      const dogYears = (humanYears) => {
      let total = 0
      if(humanYears > 0){
        total += 15
        if(humanYears > 1){
          total += 9
          if(humanYears > 2){
            total += 5 * (humanYears - 2)
          }
        }
      }
      return total
    }
    return [humanYears,catYears(humanYears) ,dogYears(humanYears)];
    
  }


  function logicalCalc(array, op){
    ob = {
        "AND" : () => array.reduce(((inc, curr) => inc && curr), true),
        "OR" : () => array.reduce(((inc, curr) => inc || curr), false),
        "XOR" : () => array.reduce(((inc, curr) => inc !== curr))
    }
    return ob[op]()
  }



  const arr = N => {
    let arr = []
    for(let i=0; i < N; i++){
      arr.push(i)
    }
    
    return arr
    };



// returns first n values of an array. default value for no input is 1
    function first(arr, n = 1) {
        return arr.slice(0, n)
      }


function getRealFloor(n) {
    if(n < 0){
        return n
    }
    else if(n > 0 && n < 13){
        return n - 1    
    }
    else if(n > 13){
        return n - 2
    }
    else{
        return 0
    }

    //   return n < 0 ? n : n > 13 ? n - 2 : n - 1
}


function uefaEuro2016(teams, scores){
    let winner = scores[0] > scores[1] ? 0 : 1
    let winningTeam = teams[winner]
    if(scores[0] === scores[1]){
      return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    }
    return `At match ${teams[0]} - ${teams[1]}, ${winningTeam} won!`
    
  }