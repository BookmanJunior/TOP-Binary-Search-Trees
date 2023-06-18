import Tree from "./tree.js";
import prettyPrint from "./prettyPrint.js";

const randomNumbers = (num, max = 100) => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(Math.floor(Math.random() * max));
  }
  return arr;
};

const printTreeInAllLevels = (tree) => {
  console.log(`Post Order: ${tree.postOrder()}`);
  console.log(`In Order: ${tree.inOrder()}`);
  console.log(`Pre Order: ${tree.preOrder()}`);
  console.log(`Post Order: ${tree.postOrder()}\n`);
};

const checkTreesBalance = (tree) => {
  console.log(`Is Tree Balanced: ${tree.isBalanced()}`);
};

const binaryTree = () => {
  const newTree = Tree(randomNumbers(10));

  // confirm that the tree is balanced
  checkTreesBalance(newTree);

  // print out elements in level, in, pre and post order
  printTreeInAllLevels(newTree);

  // unbalance tree by adding several numbers > 100
  newTree.insert(Math.floor(Math.random() * 1000));
  newTree.insert(Math.floor(Math.random() * 1000));
  newTree.insert(Math.floor(Math.random() * 1000));

  // confirm that the tree is unbalanced
  checkTreesBalance(newTree);

  // balance the tree
  newTree.rebalance();

  // confirm that tree is balanced
  checkTreesBalance(newTree);

  // print out elements in level, in, pre and post order
  printTreeInAllLevels(newTree);

  // prettyprint
  prettyPrint(newTree.root);
};

binaryTree();
