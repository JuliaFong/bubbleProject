function swap(array, idx1, idx2) {
    let bubble = array[idx1]
    array[idx1] = array[idx2]
    array[idx2] = bubble
    return array
}

let arr1 = ["b", "a", "c"]
swap(arr1, 1, 2)
arr1

function bubbleSort(array) {
    let bubbles = true

    while(bubbles) {
        bubbles = false

        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1)
                bubbles = true
            }
        }
    }

    return array
    
}


module.exports = {
    bubbleSort,
    swap
};