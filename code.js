const { small } = require("jsverify");

function quicksort(array) {

    index = pivot(array)

    console.log(index + " " + array[index])

    return array;
}


//pivot fucntion will alter the array it is given 
function pivot(array, smallerThan = -1, pointer = 0, comparing = array.length-1){

    while (pointer != comparing){
        //console.log(array[pointer] + " <= " + array[comparing] + " " + (array[pointer] <= array[comparing]))
        if (array[pointer] <= array[comparing]){
            smallerThan++
            if(pointer > smallerThan){
                temp = array[smallerThan]
                array[smallerThan] = array[pointer]
                array[pointer] = temp
            }
            if (pointer == smallerThan){
                pointer++
            }
        }
        else {
            pointer++
        }
    }
    
    if (smallerThan >= 0) {
        smallerThan++

        if (smallerThan != comparing){
            temp = array[smallerThan]
            array[smallerThan] = array[comparing]
            array[comparing] = temp
        }    
    }

    return smallerThan

}

function splitArray(array, split){

    rightListR = split + 1
    rightListL = array.length-1
    leftListR = split - 1
    leftListL = 0

}

console.log(quicksort([3,2,5,0,1,8,7,6,9,4]))
console.log(quicksort([3,2,1,0,1,1,1,1,1,4]))