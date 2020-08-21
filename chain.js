new Promise(function (resolve, reject){
  setTimeout(() => resolve(1),2000); 
}).then((result) => {
  console.log(result);
  return result + 2;  
}).then((result) => {
  throw new Error('FAILED HERE');
  console.log(rerult);
  return result + 2
}).then((result) =>{
  console.log(result);
  return result + 2;
}).then((result) =>{
  console.log(result);
  return result + 2;  
}).catch((e) => {
  console.log('error:', e) 
});

// $ $ node chain.js
// 1
// error: Error: FAILED HERE
//   at /Users/katakuranatsumi/javascript_promise/chain.js:7:9
