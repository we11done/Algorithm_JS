// Write a program that traverse the binary tree in preorder, inorder, and postorder,
// and returns the elements as an array for each order;
// left: node * 2 , right: node * 2 + 1
// Ex)
//    INPUT:       (1)
//            (2)      (3)
//         (4)   (5) (6)   (7)
//    OUTPUT:
//    preorder:  [1, 2, 4, 5, 3, 6, 7]
//    inorder:   [4, 2, 5, 1, 6, 3, 7]
//    postorder: [4, 5, 2, 6, 7, 3, 1]

const solution = number => {
  const preorder = [];
  const inorder = [];
  const postorder = [];

  const preoderRecursive = number => {
    if (number > 7) return;
    preorder.push(number);
    preoderRecursive(number * 2);
    preoderRecursive(number * 2 + 1);
  };

  const inorderRecursive = number => {
    if (number > 7) return;
    inorderRecursive(number * 2);
    inorder.push(number);
    inorderRecursive(number * 2 + 1);
  };

  const postorderRecursive = number => {
    if (number > 7) return;
    postorderRecursive(number * 2);
    postorderRecursive(number * 2 + 1);
    postorder.push(number);
  };

  preoderRecursive(number);
  inorderRecursive(number);
  postorderRecursive(number);

  return { preorder, inorder, postorder };
};

let t = performance.now();
let a1 = solution(1);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
