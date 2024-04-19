const { small, check } = require("jsverify");

function quicksort(array) {

    sublists = [[0, array.length-1]]

    while (sublists.length !=0) {

        values = sublists.pop()
        minimum = values[0]
        max = values[1]

        if (minimum < max) {
            pivot(array, minimum -1, minimum, max)
        }
    }

    return array;
}

//pivot fucntion will alter the array it is given 
function pivot(array, smallerThan = -1, pointer = 0, comparing = array.length-1){

    base = smallerThan

    while (pointer != comparing){
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

    smallerThan++
    if (smallerThan != comparing){
        temp = array[smallerThan]
        array[smallerThan] = array[comparing]
        array[comparing] = temp
    }   

    // after this smaller than becomes a pointer to the middle of the list (the middle having the sorted part)
    //comparing should still be the last position

    if (!((smallerThan - 1) == 0)) {
        sublists.push([(base+1),(smallerThan-1)])
    }
    if (!((smallerThan + 1) > (array.length - 1))) {
        sublists.push([(smallerThan+1),(comparing)])
    }

    return smallerThan

}

//console.log(quicksort([3,2,5,0,1,8,7,6,9,4]))
//console.log(quicksort([3,2,1,0,1,1,1,1,1,4]))