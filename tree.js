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

  function levelOrder(cb = null) {
    if (root === null) return;

    const queue = [root];
    // array to hold data if no cb was provided
    const arr = [];

    while (queue.length) {
      const currNode = queue.shift();

      if (cb === null) {
        arr.push(currNode.data);
      }

      if (cb) {
        currNode.data = cb(currNode.data);
      }

      if (currNode.leftNode) {
        queue.push(currNode.leftNode);
      }

      if (currNode.rightNode) {
        queue.push(currNode.rightNode);
      }
    }

    if (cb === null) return arr;
  }

  function preOrder(cb = null, tree = root, arr = []) {
    if (tree === null) return;

    if (cb) {
      tree.data = cb(tree.data);
    } else if (!cb) {
      arr.push(tree.data);
    }

    if (tree.leftNode) {
      preOrder(cb, tree.leftNode, arr);
    }

    if (tree.rightNode) {
      preOrder(cb, tree.rightNode, arr);
    }

    return arr;
  }

  return {
    root,
    insert,
    find,
    levelOrder,
    preOrder,
  };
};

export default Tree;
