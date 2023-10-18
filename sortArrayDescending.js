function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}

const inputArray = [3, 8, 1, 6, 2, 9, 4];
const sortedArray = sortArrayDescending(inputArray);
console.log(sortedArray);