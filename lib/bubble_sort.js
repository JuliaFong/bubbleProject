function swap(array, idx1, idx2) {
    let bubble = array[idx1]
    array[idx1] = array[idx2]
    array[idx2] = bubble
}

function bubbleSort(array) {

}


module.exports = {
    bubbleSort,
    swap
};