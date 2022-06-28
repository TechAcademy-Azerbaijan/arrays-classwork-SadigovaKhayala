
let  arr=[1,2,6,4];
let a=0;
let count=1;
for(let i=0;i<arr.length;i++){
    if(arr[i]>a){
        a=arr[i];
    }
    else if(arr[i]==a){
        count++
    }
}
console.log(count)
