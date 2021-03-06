
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  //for (let str = '#'; str.length <= num; str += '#'){
    //console.log(str);
  //}
  let str = '#'; 
  while (str.length <= num){
    console.log(str);
    str += '#'
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  for (let i = start; i <= end; i++){
    if (i % 3 === 0 && i %5 === 0){
      console.log('fizzbuzz');
    } else if (i % 3 === 0){
      console.log('fizz');
    } else if (i % 5 === 0){
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  let ans = '';
  for (var i = 0; i < num; i++){
    for (var y = 0; y < num; y++){
      if ((i + y) % 2 === 0){
        ans += ' ';
      } else {
        ans += '#';
      }
    }
    ans += '\n';
  }
  console.log(ans);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
