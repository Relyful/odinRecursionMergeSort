function fibs(n) {
  const fibStart = [0, 1, 1];
  let fibSqnc = fibStart;
  for(let i = 3; i < n; i++) {
    console.log(fibSqnc);
    let result = fibSqnc[i - 2] + fibSqnc[i - 1];
    fibSqnc.push(result); 
  }
  console.log(fibSqnc);
  return fibSqnc;
}

fibs(60);