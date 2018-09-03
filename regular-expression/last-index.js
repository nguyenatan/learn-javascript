var str = "Huong sUn sUn cute";
var patt = /u/ig;

while (patt.test(str) == true) {
  console.log(patt.lastIndex);
}

//result:
// 2
// 8
// 12
// 16
