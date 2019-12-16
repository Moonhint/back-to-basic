let promiseFunction = () => {
  return new Promise((resolve, reject)=>{
    resolve("something");
  });
}

let main = async () => {
  let result = await promiseFunction();
  console.log(result, "main");
  return result;
}

let mainNonAsync = () => {
  let result = main();
  console.log(result, "mainNonAsync");
  return result;
} 

// main();
mainNonAsync();