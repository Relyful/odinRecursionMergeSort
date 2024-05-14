function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  else {
    let half = Math.ceil(array.length / 2);
    const firstHalfSorted = mergeSort(array.slice(0, half));
    const secondHalfSorted = mergeSort(array.slice(half));
    let mergedSortedArr = [];
    let firstHalfNumber;
    let secondHalfNumber

    while (firstHalfSorted.length > 0 && secondHalfSorted.length > 0) {
      firstHalfNumber = firstHalfSorted[0];
      secondHalfNumber = secondHalfSorted[0];
      if (firstHalfNumber > secondHalfNumber) {
        mergedSortedArr.push(secondHalfNumber);
        secondHalfSorted.shift();
      } else {
        mergedSortedArr.push(firstHalfNumber);
        firstHalfSorted.shift();
      }
    }
    mergedSortedArr.push(...firstHalfSorted);
    mergedSortedArr.push(...secondHalfSorted);
    return mergedSortedArr;
  }
}

console.log(mergeSort([105, 79, 100, 110]));