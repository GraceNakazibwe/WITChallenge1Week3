


let  unSortedArray = [2,0,6,5,1,7,'z','a'];

console.log(unSortedArray);
 function sortArray(unSortedArray){
   let  evens = [];
   let odds = [];
   let chars = [];
   for (let i = 0; i < unSortedArray.length; i++) {
     if(unSortedArray[i]%2==0){
      evens  += unSortedArray[i] ;
     }
     else if(unSortedArray[i]%2>=1){
          odds += unSortedArray[i]  ;
     }
     else{
          chars += unSortedArray[i]  ;
     }
  
   }
   return "evens :" + [evens] + "  odds :" + [odds] + "  chars :" + [chars] ; 
}
console.log(sortArray(unSortedArray));
module.exports =  sortArray;  
  
   
