//Approach one
const array = [1,1,2,2,3,3];
const updatedArray = [...new Set(array)];
console.log(updatedArray);

//Approach two
const array2 = [1,1,2,2,3,3];
const uniueArray = [];
for(let i=0;i<array2.length;i++){
    if(uniueArray.indexOf(array[i])===-1){
        uniueArray.push(array[i])
    }
}
console.log(uniueArray);
