function nextPlay(arr){
  for(var i = arr.length-1;i > -1; i--){
    arr[2*i+1] = arr[i] + "1";
    arr[2*i] = arr[i] + '0';
  }
  return arr;
}

var arr = ['0','1'];
for(var i = 1;i < 12;i++){
  arr = nextPlay(arr);
}

arr = arr.filter(function(ele){
  var shoot = ele.split('').reduce((accu,curr) => {return +accu + +curr});
  return shoot === 8;
});
console.log('shoot 8:',arr.length);
var arr2 = arr.filter((ele) => {
  var re = /1111/gi;
  return re.test(ele);
});
console.log('shoot ongoing rate:',arr2.length/arr.length);
