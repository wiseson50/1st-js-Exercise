//Exercise1
/* let myName = "Dickson";
console.log("myName :>> ", myName);
*/

//Exercise2
//let myAge = 29;
//console.log("myAge :>> ", myAge);

//Exercise3
/* let juliaAge = 32;
 let ageDiff = juliaAge- myAge
console.log('ageDiff :>> ', ageDiff);
 */
/* //exercise4
let myAge = 28;
let compareAge = 21;
if(compareAge< myAge){
    console.log('You are older than'+ " "+ compareAge);
}
else{
    console.log('You are younger than'+ ' '+ compareAge)
};
 */
//Exercise5 conditional
/* if(myAge > juliaAge){
   console.log('you are older than Julia')}

else{
    console.log('Julia is older than you');
} */

//Exercise6
/* 
let studentNames = [
  "Viktor",
  "Dickson",
  "Sebastian",
  "Jost",
  "Heron",
  "Silvia",
  "Jacopo",
  "Raul",
];
console.log(studentNames.sort());
console.log(studentNames[0]);
console.log(studentNames.pop());
console.log(studentNames.shift());
for (let i = 0; i < studentNames.length; i++) {
  console.log(studentNames[i]);
} */

//Exercise7
//let studentAges = [ 28, 56, 35, 12, 45, 44, 29, 31, 26,34]

//while (i<studentAges.length) {
//  console.log(studentAges[i]); i++;};
/* 
//let i=0
   while (i<studentAges.length) {
if(studentAges[i] % 2==0)
    console.log(studentAges[i]); i++}
    ;
 */

/* for(let i =0; i<studentAges.length; i++){
    if(studentAges[i] % 2 == 0){
    console.log(studentAges[i]); }} */
//

//let  = 1;
//while(remain<=15){
// if(remain % 2==0)
// {
//   console.log(remain);
// } remain++
//}

//*

//Exercise8
/* let numberArray = [
    3, 49, 28, 1, 36, 57, 8, 1] 

 function result( smallestNum) {
     //another ways to do this>> let smallestNum = Math.min(...numberArray)
     //console.log(smallestNum);  
  return smallestNum = Math.min.apply(Math, numberArray)

 }
 console.log(result())
 */
//Eercise8

// let numberArray = [ 30, 49, 28, 10, 36, 57, 83, 34] 

//  function result(numberArray) {
//     let smallestNum = numberArray[0];
//     for(let i =1; i<numberArray.length; i++){
//         if(numberArray[i] < smallestNum){
//             smallestNum = numberArray[i]
//         }
//     }
//     console.log(smallestNum);
//  }
// result(numberArray)
  

//Exercise 9
/* 
let numberArray = [ 130, 49, 28, 10, 36, 57, 83, 34, 102] 
function result(numberArray) {
    let biggestNum = numberArray[0];
    for(let i =1; i<numberArray.length; i++){
        if(numberArray[i] > biggestNum){
            biggestNum = numberArray[i]
        }
    }
    console.log(biggestNum);
 }
result(numberArray) */

 //Exercise10

//  let numberArray = [130, 49, 28, 10, 36, 57, 83, 34, 102];
// let numIndex = 8;

// function result(numberArray, numIndex) {
     
//   return numberArray.at(numIndex)
// }
// console.log(result(numberArray, numIndex));
 
 
 //Exercise11
 
//  let arrLetters= ['a', 'b', 'b', 'c', 'e', 'r','w','c']
// function doubleNum(arrLetters) {
//     let maxItem = [];
//     for(let i =0; i<arrLetters.length; i++){
//        for(let k=0; k<arrLetters.length; k++){
// if(!maxItem.includes(arrLetters[i]));
// maxItem.push(arrayLetters[i])
//        }
//     //    itemCount[item] = itemCount[item] + 1 || 1;
//     //    console.log('itemCount[item] :>> ', itemCount[item]);
//     //    if(itemCount[item] >= 2){
//     //     console.log(item);
//     //     maxItem.push(item)
//     //    }
//     // }
//     return maxItem
// }



// }
// console.log(doubleNum(arrLetters));  


//Exercise12
// let arrThings = ['cat','ball','dog','run','red'];
// let joinThings= arrThings.join();
// function ans(joinThings){
// return joinThings
// }

// console.log(ans(joinThings));


//Exercise13
// let animal = [ 'cat', 'dog','bird','snake', 'cow'];
// let rewrite = animal.reverse();

// function answer(rewrite){
//     return rewrite
// }
// console.log(answer(rewrite
//     )); 

    //Exercise14

//     let alphabeth= ['z','b','w','e','a','b'];
//     let arrangeAlphabeth = alphabeth.sort();

//     function answer(arrangeAlphabeth){
//         return arrangeAlphabeth;
//     }
//    console.log( answer(arrangeAlphabeth));

 

    //Exercise15

//    let peopleNames = ['john', 'steven', 'eve', 'dickson'];
//    function answer(peopleNames){
//     for(let i =0; i<peopleNames.length; i++){
//         console.log(peopleNames[i].toLocaleUpperCase())
//     }
//    return peopleNames
//    }
//    answer(peopleNames); 

 

//Exercise16
// let phrase = 'write in an Alphabethical order';
// function answer(phrase){
//     let strg = phrase.split(' ');
//     let longestWord = 0;
//     let things ='';
//     for(let i=0; i<strg.length; i++)
//     {
//         if(longestWord<strg[i].length){
//             longestWord = strg[i].length;
//             things=strg[i];
//         }
//     }
// return things;
// }
//   console.log(answer(phrase)) 

//Exercise17

let arrs = [];
function words(arrs) {
   
    let myUl= document.getElementById('band-list');
    let myLi = document.getElementById('li')
 for(let i=0; i<arrs.length; i++){
    myLi = document.createElement('li');
    myLi.innerHTML=arrs[i]
    myUl.appendChild(myLi);
 }
return arrs
}
console.log(words(['Dire streits ','Kansas','Steely Dan','Rita']));

//Exercise18

let myTab = document.createElement('table');
let tBody = document.createElement('tbody');
let myTable = document.getElementById('tables')


for(let i = 0; i<3; i++){
  let row = document.createElement('tr')
  
  for(let j= 0; j<3; j++){
    
    let cell = document.createElement('td')
    cell.innerText ="abc"
    cell.setAttribute("class", "red");
    cell.style.border = '2px solid black';
    row.appendChild(cell)
    

  }
  
  myTab.appendChild(tBody);
  tBody.appendChild(row)
  myTab.style.border = '2px solid black';
  tBody.style.border = '2px solid black';
  row.style.border = '2px solid black';
  
}


myTable.appendChild(myTab)
console.log(myTab)


// function addMultiTable(myBody,myHead){
    
//      myTable = document.createElement('table');
//         myHead = document.createElement('thead');
//        myBody = document.createElement('tbody');
        
//         myTable.appendChild(myHead);
//         myTable.appendChild(myBody);
//   document.getElementById('body').appendChild(myTable);
//   return myBody,myHead
 
// }
   
// console.log(addMultiTable());

// let myTable = document.createElement('table');
// let myTbody = document.createElement('tbody');
// let myHead = document.createElement('thead');
// let myH = document.createElement('tr');

// myH= document.createTextNode('fly high')

// myTbody.appendChild(myH);
// myTable.appendChild(myTbody);
// myTable.appendChild(myHead);


// document.getElementById('tables').appendChild(myTable)

// console.log(myTable);

//Exercise 19

// function sum(){
// console.log(3*9);
// }
// sum()


//Exercise20
// function multiple (){
    
//     return 2*6

// }
// console.log(multiple());

//Exercise 21

// function multiplePara(a,b){
    
// return a*b
// }
// console.log(multiplePara(3,4))

//Exercise22

// function area(a,b,c){
// if(a===b && b===c){
//     console.log('equilatral Triangle');
// }
// else if(a===b || a===c || b===c){
//     console.log('isosceles Triangle');
// }
// else{
//     console.log('Other Triangle');
// }
// return a,b,c
// }
// area(15,15,56);
// area(15,15,15);
// area(15,1,20)

//Exercise 23

// let arrs = ['Java', 'Ghana','Car']
// function alphabetPosition(arrs) {
// let newArrs =[];
//   for(let i = 0; i<arrs.length; i++){
//     console.log(arrs[i].replaceAll('a', 1))
//   }
//   return newArrs
// }
// alphabetPosition(arrs)
//Exercise24

// let numbers=[ 4,9,20,30,11,6];
// function result(numbers){ 
// let addTotal=0;
// for(let i =0; i<numbers.length;i++){
    
//    addTotal+=numbers[i];
// }
// return addTotal
// }
// console.log(result(numbers))

//Exercise24b solution1
//  let numbers=[ 4,9,20,30,11];
// let a = Math.min.apply(Math, numbers)
// console.log(a);

//Exercise24b solution2
// let numbers = [21,5,7,9];
// let result = numbers[0];
// function smallestNum(numbers){ 

// for(let i=0; i<numbers.length; i++){
//     if(numbers[i]< result){
//         result=numbers[i]
//     }
// }
//     return result
// }
// console.log(smallestNum(numbers))

//Exercise25

// let allNums = [2,5,9,6,8];
//  let addEvenNo =0;
// function a(allNums){
//     for (let i = 0; i < allNums.length; i++) {
//         if(allNums[i] % 2== 0){
//          addEvenNo+=(allNums[i])
             
//         }
        
//     }
//     return addEvenNo;
//  }
//  console.log(a(allNums))

//Exercise 26


// let allNums = [2,5,9,6,8];
//  let addEvenNo ='';
// function a(allNums){
//     for (let i = 0; i < allNums.length; i++) {
//         if(allNums[i] % 2== 0){
//          addEvenNo+=allNums[i]
             
//         }
        
//     }
//     return addEvenNo;
//  }
//  console.log(a(allNums))

//Exercise26,(2nd solution)
// function evenPosition(arr) {

//     let evenArr = 0;
//     for (let i = 0; i < arr.length; i++) { 

//         if (i % 2 === 0) { 
//           evenArr+=(arr[i]);
//         }

//     }
//     return evenArr;
// }
// console.log(evenPosition([1, 2, 3, 4, 5, 6, 7, 8, 9]))
