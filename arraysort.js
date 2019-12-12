


let  unSortedArray = [2,0,6,5,1,7,'z','a'];

console.log(unSortedArray);
 function sortArray(unSortedArray){
   let  evens = " ";
   let odds = " ";
   let chars = " ";
   for (let i = 0; i < unSortedArray.length; i++) {
     if(unSortedArray[i]%2==0){
      evens  += unSortedArray[i] ;
     }
     else if(unSortedArray[i]%2!=0){
          odds += unSortedArray[i]  ;
     }
     else{
          chars += unSortedArray[i]  ;
     }
  
   }
   return "evens" + evens + "odds" + odds + "chars" + chars ; 
}
console.log(sortArray(unSortedArray));
   
  
    // let selectedVowels = "" ;
    // let dupe = 0;
    
    // let w = ("nakazibwe");
    // w = w.split('');
    // const vowels = ['a','e','i','o','u']
    // function pickVowels(w) {
    //     for(i=0; i < w.length; i++){
    //       if (vowels.includes(w[i])) {
