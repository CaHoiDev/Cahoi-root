let data = [9,5,2,6,9,0,4,7]
let dataA = [0,1,2,3,4,5,6,7,8,9]
function selectionSort(data) {
    let dataLength = data.length
    let counter = 0
    for (let x = 0; x < dataLength; x++) {
        let minIndex = x
        for (let y = x + 1; y < dataLength; y++) {
            counter++
            if (data[y] > data[minIndex]){
                minIndex = y
            }
        }
        if (minIndex !== x){
            let current = data[x]
            data[x] = data[minIndex]
            data[minIndex]  = current
        }
    }
    console.log(counter)
}

function bubbleSort(data) {
    let counter = 0
    for (let x = 0; x < data.length; x++) {
        for (let y = data.length - 1; y > x ; y--) {
            counter++
            if (data[y] > data[y - 1]){
                let current = data[y]
                data[y] = data[y - 1]
                data[y - 1] = current
            }
        }
    }
    console.log(counter)
}

function insertionSort(data) {
    let dataLength = data.length
    for (let x = 0; x < dataLength; x++) {
        let currentIndex = x + 1
        for (let y = x + 1; y >= 0 ; y--) {
            if (data[y - 1] > data[currentIndex]){
                currentIndex = y
            }
        }

    }
}

bubbleSort(dataA)
console.table(dataA)