// /* console.log("hello");
// document.write("hello world")
// alert("here its me")
// */
// if (true)
//     console.log("hello");
// else
//     console.log("hi");
    
 
// age = 18
// tickets = age>=18 ? 100 : 30  // variable  =  condition ? true_value : false_value
// console.log(tickets);
// //largest number in given 3 variable
// let a=10;
// let b=20;
// let c=30;
// if (a>b &&  a>c){
//     console.log(`${a} is greater then ${b} and ${c}`);
// }
// else{
//     if(b>c){
//         console.log(`${b} is greater then ${a} and  ${c}`);
//     }
//     else{
//         console.log(`${c} is greater then ${a} and  ${b}`); 
//     }
// }


// // Logical  && || !         bitwise ~ & |



// //iterative statements  
// //loops 
// //for 
// //while
// //do while
// // for each
// // for  of 
// // for in 

// // 1.assignment
// // 2.condition
// // 3.incre/decre or state change 



// for (let i = 1; i <= 5; ++i) {
//     console.log(i);
// }

// // a = [1,2,3,{'a':1},1.3,"hello",[2,3,4],console.log]

// // console.log(a[7]("hello its me "));

// // console.log(a[6][2]);

// a=['a','b','c','d','e']
// // a={'a':1,'b':2,'c':3,'d':4,'e':5,'f':6}
// a="hello world"
// // for (let i = 0; i < a.length; i++) {
// //    console.log(a[i]);      //value by giving index inside [] 
// //                         // all 
// // }

// // for (const i  in a) { 
// //     console.log(i);      //index array        or object    key
// // }

// // for (const i of a) {
// //     console.log(i);      //value        string or  array
// // }

// // a.forEach(element => {
// //     console.log(element); //value            arrays
// // });
// console.log(a);  //array



// i=1
// do {
//     console.log(i);
//     i++;
// } while (i<=-3);


// while (i<5) {
//     console.log(i);
//     i++;
// }






// greet("before")
// function greet(name){
//     console.log("hello",name);
// }

// let ab = function(a,b){
//     return a+b
// }
// console.log(ab(2,4))

// let ac = (a,b)=>a+b

//callbacks 
// function createObject(){
//     return {
//         name:"",
//         getName:()=>this.name,
//         setName:(name)=>{this.name = name}
//     }
// }
// raj = createObject()
// raj.setName("raj")
// console.log(raj.getName());
// raja = createObject();
// raja.setName("raja");
// name="my"
// console.log(raja.getName(),raj.getName(),name);


// d = {
//     // 1:'one',
//     2:'two',
//     null:'onetwo'
// }
// console.log(d[null]);


// r = {
// 1:'one',
// 2:'two'
// }
// r[1]="ONE"
// r[3]="Three"

// console.log("==========1===========")
// for (const key in r) {                     //keys
//     console.log(r[key]);                 
// }

// console.log("=========2=========");
// console.log(Object.keys(r));   //  [1,2,3]
// console.log(Object.values(r));  //['one','two','three']
// console.log(Object.entries(r)); //[['1','one'],['2','two'],['3','three']]

// console.log("===============3=============");
// for(const element of Object.entries(r)){                 //value
//     console.log(element);
    
// }

// function add(a,b){   //perameters
//     return a+b
// }
// add(1,2)             // arrguments


// // passing function as a arrgument is call callback
// console.log([1,2,3].map((n)=>n*2))
// function double(n){
//     return n*2
// }
// console.log([2,4,8].map(double));
// console.log("from here===================");

// function mapToArraysValue (arr,fun) {
//     for(const key in arr){
//         arr[key] = fun(arr[key])
//     }
//     return arr
// }

// a=[1,2,3,4]
// a.map((n)=>n*2)
// console.log(mapToArraysValue(a,(n)=>n*3),a)
// b=[1,2,3,4]
// b.map(double)
// console.log(b);


// a=[1,2,3,4]
// function* myMap(arr,fun){
//     for(const val of arr){
//         let result = fun(val) ;
//         yield result;        
//     }
// }
// console.log(Array.from(myMap(a,(n)=>n*3)),a)

// function times(num){
//     return function (val){
//         return num*val;
//     } 
// }
// double = times(2)  //  return 2* val
// triple = times(3)//   return 3 * val
// console.log(double(5));  //   return 2 * 5  = 10
// console.log(triple(6));//     return 3  * 6 = 18


// function count(num){

//     return function(val){
//         val = num  +val;
//         return val
//     }
// }

// increByOne = count(1)
// console.log(increByOne(3));
// increByTwo = count(2);
// console.log(increByTwo(3));
// console.log(increByTwo(32));


// mat = [[1,2,3],[4,5,6],[7,8,9]]
// for(const i of mat){                                  // [1,2,3]    [4,5,6]
//     result =''                                        //''
//     for(const j of i){                                // 4      5        6
//         result = result + ' ' + String(j);            // '' + ' ' + 1 => ' 1'+ ' '+'2'=>' 1 2' + ' ' + '3'=> ' 1 2 3'
//     }
//     console.log(result);
// }

/*[
[11 22 33]             r=0
[44 55 66]             r=1
[77 88 99]             r=2
]
console.log(mat[row][col])

*/
// console.log(mat[1][2])









// obj = {
//     'a':{
//         97:'nintyseven'
//     },
//     'b':{
//         98:"nintyeight"
//     }
// }

// for(const key in obj){     //                 a               b
//     for (const element in obj[key]) {     //{97:nintyseven}       {98:'nintyeight'}
//       console.log(key, element,obj[key], obj[key][element]);  //97          98
//     }
// }


arr =[]
for (let index = 0; index < 3; index++) {
    arr.push([])
    for (let j = 0; j < 3; j++) {
        arr[index].push(11*((index*3)+(j+1)))
   }
}
console.log(arr);
