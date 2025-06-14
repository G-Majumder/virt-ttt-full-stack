//find the maximum element in an array

function getMax(items : number[]) : number{
    let max : number = items[0];
    for(let i = 1; i <items.length; i++){
        if(items[i] > max){
            max = items[i];
        }
    }
    return max;
}

let items : number[] = [23, 67, 12, 90, 54, 89, 43, 11, 55];
console.log(`The maximum number of ${items} is ${getMax(items)}`)