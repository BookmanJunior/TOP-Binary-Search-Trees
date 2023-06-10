const mergeSort = (arr) => {
  if (arr.length > 1) {
    const midPoint = Math.ceil(arr.length / 2);
    const leftHalf = arr.slice(0, midPoint);
    const rightHalf = arr.slice(midPoint);
    mergeSort(leftHalf);
    mergeSort(rightHalf);
    merge(leftHalf, rightHalf, arr);
  }
};
