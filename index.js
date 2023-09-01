function writeCards(names, events){
const newArray=[]
for ( let p=0; p<names.length;p++){
newArray.push(`Thank you, ${names[p]}, for the wonderful ${events} gift!`);
}
return newArray
}
function countDown(k){
for(let i=k; i>=0;i--){
console.log(i)
}
}