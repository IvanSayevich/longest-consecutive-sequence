module.exports = function longestConsecutiveLength(array) {
  let count=0;
  let result=0;
  let countArray = [];
  array.sort((a, b) => a - b);
  Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  for(let i=1;i<array.length-1;i++){
    let compare = array[i]-array[i-1];
    if(compare == 1){
      count++;
    }else{ 
      countArray.push(count);
		count = 0;
    }
  };
  result = countArray.max()+1;
  return result;
}
