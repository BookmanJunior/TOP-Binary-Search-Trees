const mergeSort = (arr) => {
  if (!arr.length) return "Array can't be empty";

  if (arr.length === 1) return arr;

  const midPoint = Math.ceil(arr.length / 2);
  const leftHalf = arr.slice(0, midPoint);
  const rightHalf = arr.slice(midPoint);
  mergeSort(leftHalf);
  mergeSort(rightHalf);
  return merge(leftHalf, rightHalf, arr);
};

function merge(leftHalf, rightHalf, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] < rightHalf[j]) {
      arr[k++] = leftHalf[i++];
    } else {
      arr[k++] = rightHalf[j++];
    }
  }

  for (; i < leftHalf.length; i++) {
    arr[k++] = leftHalf[i];
  }

  for (; j < rightHalf.length; j++) {
    arr[k++] = rightHalf[j];
  }

  return arr;
}

export default mergeSort;

// test
console.log(mergeSort([2, 4, 3, 1, 10, 7, 20]));
