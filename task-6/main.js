const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Number type-a çevirmək üçün parseInt() metodundan istifadə edirik.
    Vergüllə daxil edilmiş sətri iki fərqli ədədə bölmək üçün split metodundan istifadə edirik.
    */
    var input = result.input; // "5,2 4 7 12 9"
    var input_data = input.split(','); // ['5', '2 4 7 12 9']
//     var n = parseInt(input_data[0]); // Massivin element sayı. Nümunə - 5
   let  arr=[5,1,6,5,9];
let sum=0;
let max=0;
let min=3000;

let result;

if(arr.length>1){
for( let i=0;i<arr.length;i++){
if(arr[i]>max){
    max=arr[i];

}

if(arr[i]<min){
    min=arr[i];
  
}

}console.log(min)
console.log(max)}
else{
console.log("Ooops!")
}

});
