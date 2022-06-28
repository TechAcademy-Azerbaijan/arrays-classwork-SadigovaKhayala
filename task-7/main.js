let  arr=[14, 17, 16, 3, 7, 19, 9];

for( let i=0;i<arr.length;i++){
    if ( arr[i]%2===0) { 
    
        arr.splice(i, 1); 
    }


}
console.log(arr);
