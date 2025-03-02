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
// function even_msg(value) {
//   console.log(value,' is even');
//   document.write(value, " is even");
// }
// function odd_msg(error){
//   console.log(error," is odd");
//   document.write(error, " is odd");
// }

// function my_function(resolve,reject){
//   let num = prompt("enter value")
//   // num = 4
//   if(num%2==0)
//   {
//       fun = ()=>{
//         resolve(`${num}`)
//       }
//       setTimeout(fun,1000*2);
//   }
//   else{
//     fun =()=>{
//       reject(`${num}`);
//     }
//       setTimeout(fun, 1000*2);
//   }
// }
// async function give_promise(my_function){
//   return new Promise(my_function)
// }
// // let pro = async (my_function)=>{
// //   let foo= await give_promise(my_function)
// //   return foo;
// // }

// // let promise = new Promise(my_function);
// async function execute1(fun1,fun2,pro_fun) {
//   console.log("hello done with promises");
//   promise1 = await give_promise(pro_fun)
//   promise1.then(fun1).catch(fun2)
//   console.log("hello done with promises");
// }

// execute1(even_msg,odd_msg,my_function)
// //  promise.then(even_msg).catch(odd_msg);

// let global_data;
// async function get_data() {
//    await fetch("https://fakestoreapi.com/products")
//     .then((responce) => responce.json())
//     .then((data) => {
//       global_data = data;
//       console.log("got the data");
//     });
//   console.log("finish");
//   console.log("here its me", global_data, "and here is the data");
// }

// get_data()
// console.log("here out side of the function");

// function even_msg(value) {
//   console.log(value, "is even");
//   document.write(value, " is even");
// }

// function odd_msg(error) {
//   console.log(error, "is odd");
//   document.write(error, " is odd");
// }

// function my_function(resolve, reject) {
//   let num = prompt("Enter value");

//   if (num % 2 == 0) {
//     setTimeout(() => resolve(`${num}`), 2000);
//   } else {
//     setTimeout(() => reject(`${num}`), 2000);
//   }
// }

// function give_promise(my_function) {
//   return new Promise(my_function);
// }

// async function execute1(fun1, fun2, pro_fun) {
//   console.log("Started execution...");

//   let promise = give_promise(pro_fun); 


//  await promise.then(fun1).catch(fun2);

//   console.log("Promise handling is done.");
// }

// execute1(even_msg, odd_msg, my_function);


function give_promise(my_function) {
  return new Promise(my_function);
}

async function execute1(fun1, fun2, pro_fun) {
  console.log("Started execution...");

  let promise = give_promise(pro_fun);

  await promise.then(fun1).catch(fun2);

  console.log("Promise handling is done.");
}

execute1(
  (value)=>{
  console.log(value, "is even");
  document.write(value, " is even");
},
 (error)=>{
  console.log(error, "is odd");
  document.write(error, " is odd");
}, 
(resolve, reject) =>{
  let num = prompt("Enter value");

  if (num % 2 == 0) {
    setTimeout(() => resolve(`${num}`), 2000);
  } else {
    setTimeout(() => reject(`${num}`), 2000);
  }
});
