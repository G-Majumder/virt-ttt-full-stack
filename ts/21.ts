//Checking become compulsory if we didn't know about the type of array
//sort() considered each element as string, so directly it won't work for numeric values
function checkArrayType(nums : any[]) : boolean{
    return nums.length > 0 && typeof nums[0] === 'number';
}

let nums = [23, 56, 12, 78, 90, 23, 44, 78];

//prints the array
console.log(`The given array : ${nums}`);

if(checkArrayType(nums)){
    //create a shallow copy so that original array didn't change
    let sortedArray = [...nums].sort((a,b)=>a-b);
    //array sorted using array method sort()
    console.log(`The sorted array : ${sortedArray}`);
}else{
    //create a shallow copy so that original array didn't change
    let sortedArray = [...nums].sort();
    //array sorted using array method sort()
    console.log(`The sorted array : ${sortedArray}`);
}