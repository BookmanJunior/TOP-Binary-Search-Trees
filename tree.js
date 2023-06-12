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

  function insert(value, tree = root) {
    if (tree === null) {
      tree = Node(value);
      return tree;
    }

    if (value < tree.data) {
      tree.leftNode = insert(value, tree.leftNode);
    }

    if (value > tree.data) {
      tree.rightNode = insert(value, tree.rightNode);
    }

    return tree;
  }

  function find(value, tree = root) {
    if (tree === null) {
      return `Node with ${value} doesn't exist`;
    }

    if (value < tree.data) {
      return find(value, tree.leftNode);
    }

    if (value > tree.data) {
      return find(value, tree.rightNode);
    }

    return tree;
  }

  return {
    root,
    insert,
    find,
  };
};

export default Tree;
