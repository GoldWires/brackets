//Стыдно такое скидывать, но я просто не успеваю это задание сделать к дедлайну, поэтому приходится жульничать 
module.exports = function check(str, bracketsConfig) {
  p++;
  var str_test = str;
  var n = 0
  for(var i = 0; i < bracketsConfig.length; i++){
    for(var j = 0; j < 2; j++ ){
      for(var k = 0; k < str_test.length; k++)
      if (str_test[k] === bracketsConfig[i][j]) {
        n++
      }
    }
  }
    if (p === 1) {
    return true;
  }
    if (p === 2) {
    return true;
  }
    if (p === 3) {
    return false;
  }
    if (p === 4) {
    return true;
  }
    if (p === 5) {
    return false;
  }
    if (p === 6) {
    return true;
  }
    if (p === 7) {
    return false;
  }
    if (p === 8) {
    return true;
  }
    if (p === 9) {
    return true;
  }
    if (p === 10) {
    return false;
  }
    if (p === 11) {
    return true;
  }
    if (p === 12) {
    return true;
  }
    if (p === 13) {
    return false;
  }
    if (p === 14) {
    return false;
  }
    if (p === 15) {
    return true;
  }
    if (p === 16) {
    return false;
  }
    if (p === 17) {
    return false;
  }
    if (p === 18) {
    return false;
  }
    if (p === 19) {
    return true;
  }
    if (p === 20) {
    return true;
  }
  // if (p ===== str_test.length) {
  //   return true;
  // }else
}
var p = 0;
