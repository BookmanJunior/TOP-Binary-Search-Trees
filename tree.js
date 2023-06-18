import Node from "./node.js";
import mergeSort from "./mergeSort.js";

const Tree = (array) => {
  let root = buildTree(mergeSort([...new Set(array)]));

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
      // return is assigned to recursion that called it
      return Node(value);
    }

    if (value < tree.data) {
      tree.leftNode = insert(value, tree.leftNode);
    }

    if (value > tree.data) {
      tree.rightNode = insert(value, tree.rightNode);
    }

    return tree;
  }

  function remove(node, tree = root) {
    if (tree.data === node) {
      if (tree.leftNode && tree.rightNode) {
        const temp = tree;
        tree = tree.rightNode;
        while (tree.leftNode) {
          tree = tree.leftNode;
        }
        temp.data = tree.data;
        tree = temp;
        tree.rightNode = remove(tree.data, tree.rightNode);
        return tree;
      }

      if (tree.leftNode && !tree.rightNode) {
        tree = tree.leftNode;
        return tree;
      }

      if (tree.rightNode && !tree.leftNode) {
        tree = tree.rightNode;
        return tree;
      }
      tree = null;
      return tree;
    }

    if (node < tree.data) {
      tree.leftNode = remove(node, tree.leftNode);
    }

    if (node > tree.data) {
      tree.rightNode = remove(node, tree.rightNode);
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

      if (cb && typeof cb === "function") {
        currNode.data = cb(currNode.data);
      } else if (!cb) {
        arr.push(currNode.data);
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

    if (cb && typeof cb === "function") {
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

  function inOrder(cb = null, tree = root, arr = []) {
    if (tree === null) return;

    if (tree.leftNode) {
      inOrder(cb, tree.leftNode, arr);
    }

    if (cb && typeof cb === "function") {
      tree.data = cb(tree.data);
    } else if (!cb) {
      arr.push(tree.data);
    }

    if (tree.rightNode) {
      inOrder(cb, tree.rightNode, arr);
    }

    return arr;
  }

  function postOrder(cb = null, tree = root, arr = []) {
    if (tree === null) return arr;

    if (tree.leftNode) {
      postOrder(cb, tree.leftNode, arr);
    }

    if (tree.rightNode) {
      postOrder(cb, tree.rightNode, arr);
    }

    if (cb && typeof cb === "function") {
      tree.data = cb(tree.data);
    } else if (!cb) {
      arr.push(tree.data);
    }

    return arr;
  }

  function height(tree = root) {
    if (tree === null) {
      return -1;
    }

    const leftHeight = height(tree.leftNode);
    const rightHeight = height(tree.rightNode);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  function depth(node, tree = root, d = 0) {
    if (node === null || tree === null) {
      return `Given ${node} doesn't exist.`;
    }

    if (node === tree.data) {
      return d;
    }

    if (node < tree.data) {
      d += 1;
      return depth(node, tree.leftNode, d);
    }

    if (node > tree.data) {
      d += 1;
      return depth(node, tree.rightNode, d);
    }
  }

  function rebalance() {
    const arr = inOrder();
    root = buildTree(arr);
  }

  return {
    get root() {
      return root;
    },
    insert,
    remove,
    find,
    levelOrder,
    preOrder,
    inOrder,
    postOrder,
    height,
    depth,
    rebalance,
  };
};

export default Tree;
