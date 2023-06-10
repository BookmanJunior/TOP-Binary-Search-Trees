import Tree from "./tree.js";
import prettyPrint from "./prettyPrint.js";

const orderedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newTree = Tree(orderedArray);
prettyPrint(newTree.root);
