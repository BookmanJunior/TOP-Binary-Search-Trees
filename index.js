import Tree from "./tree.js";
import prettyPrint from "./prettyPrint.js";

// const orderedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const unorderedArray = [1, 7, 4, 23, 8, 9, 3, 5, 7, 67, 6345, 324];
const orderedArrayDupes = [1, 2, 2, 3, 4, 4, 4, 5, 5];

const newTree = Tree(orderedArrayDupes);
prettyPrint(newTree.root);
