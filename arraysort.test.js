const sortArray = require('./arraysort'); 
test ('returns even numbers when array index is divisible by 2',()=>{expect (sortArray( [2,0,6,5,1,7,'z','a'])).toBe( 'evens :' + 206)})
test ('returns odd numbers when array index is not divisible by 2',()=>{expect (sortArray( [2,0,6,5,1,7,'z','a'])).toBe( 'odds :517')})
test ('returns characters  when array index is not a number but a character',()=>{expect (sortArray( [2,0,6,5,1,7,'z','a'])).toBe( 'chars :za')})









