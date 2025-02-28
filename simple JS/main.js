// function add(...arr){
//     setTimeout(() => {
//       console.log("Delayed for 3 second.");
//       sum=0
//       console.log(arr);
//       for (const element of arr) {
//         sum+=element
//       }
//       console.log(sum);
//     }, 1000*3);
//     console.log("done");
// };
// add(1,23,4,5);


promise = new Promise((resolve,reject)=>{
  num = prompt("enter value")
  if(num%2==0)
  {
      resolve(`${num}`);
  }
  else{
      reject(`${num}`);
  }
})
promise
.then(function(value) {
  console.log(value,' is even');
  document.write(value, " is even");
  
}).catch(function(error){
  console.log(error," is odd");
  document.write(error, " is odd");
});