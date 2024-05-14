function fibs(n) {
  if (n <= 2) {
    return [0, 1];
  } else {
    let result = fibs(n-1);
    result.push(result[result.length - 1] + result[result.length-2]);
    return  result;
  }  
}