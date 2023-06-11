import Node from "./node.js";
import mergeSort from "./mergeSort.js";

const Tree = (array) => {
  const root = buildTree(mergeSort([...new Set(array)]));

  function buildTree(arr, start = 0, end = arr.length - 1) {
    if (start > end) return null;

    const midPoint = Math.floor((start + end) / 2);

    const newNode = Node(arr[midPoint]);
    newNode.leftNode = buildTree(arr, start, midPoint - 1);
    newNode.rightNode = buildTree(arr, midPoint + 1, end);

    return newNode;
  }

  return {
    root,
  };
};

export default Tree;
