import Node from "./node.js";

const Tree = (array) => {
  const root = buildTree(array);

  function buildTree(arr) {
    if (arr.length < 1) return null;

    const midPoint = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, midPoint);
    const rightHalf = arr.slice(midPoint + 1);

    const newNode = Node(arr[midPoint]);
    newNode.leftNode = buildTree(leftHalf);
    newNode.rightNode = buildTree(rightHalf);

    return newNode;
  }

  return {
    root,
  };
};

export default Tree;
