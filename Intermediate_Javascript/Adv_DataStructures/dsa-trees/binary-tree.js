/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    // If the tree is empty, the minimum depth is 0
    if (!this.root) return 0;

    // Initialize a queue for BFS and start with the root node
    const queue = [this.root];
    let depth = 1; // Start depth at 1 since we are at the root level

    // Perform BFS to find the minimum depth
    while (queue.length > 0) {
      // Process all nodes at the current level
      let levelSize = queue.length;
      for (let i = 0; i < levelSize; i++) {
        const current = queue.shift();

        // If a leaf node is found, return the current depth
        if (!current.left && !current.right) return depth;

        // Add children of the current node to the queue
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }

      // Increment depth after processing all nodes at the current level
      depth++;
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    // If the tree is empty, the maximum depth is 0
    if (!this.root) return 0;

    // Initialize a queue for BFS and start with the root node
    const queue = [this.root];
    let depth = 0; // Initialize depth to 0

    // Perform BFS to calculate the maximum depth
    while (queue.length > 0) {
      // Increment depth at the start of each level
      depth++;

      // Process all nodes at the current level
      let levelSize = queue.length;
      for (let i = 0; i < levelSize; i++) {
        const current = queue.shift();

        // Add children of the current node to the queue
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }
    }

    // Return the maximum depth of the tree
    return depth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    // If the tree is empty, return 0
    if (!this.root) return 0;

    let maxSum = -Infinity;

    function findMaxPathSum(node) {
      if (!node) return 0;

      // Calculate the maximum path sum for the left and right subtrees
      const leftMax = Math.max(findMaxPathSum(node.left), 0);
      const rightMax = Math.max(findMaxPathSum(node.right), 0);

      // Calculate the maximum path sum with the current node as the highest node
      const currentMax = node.val + leftMax + rightMax;

      // Update the global maximum path sum
      maxSum = Math.max(maxSum, currentMax);

      // Return the maximum path sum that can be extended to the parent
      return node.val + Math.max(leftMax, rightMax);
    }

    findMaxPathSum(this.root);
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    const queue = [this.root];
    let nextLargerValue = null;

    while (queue.length > 0) {
      const current = queue.shift();

      // Check if the current node's value is larger than lowerBound
      // and is smaller than the current nextLargerValue
      if (current.val > lowerBound && (nextLargerValue === null || current.val < nextLargerValue)) {
        nextLargerValue = current.val;
      }

      // Add children to the queue for further exploration
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return nextLargerValue;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    // If the tree is empty or the nodes are the same, they cannot be cousins
    if (!this.root || node1 === node2) return false;

    // Initialize a queue for BFS, storing each node with its parent and level
    const queue = [{ node: this.root, parent: null, level: 0 }];
    let node1Info = null;
    let node2Info = null;

    // Perform BFS
    while (queue.length > 0) {
      const { node, parent, level } = queue.shift();

      // Check if the current node is node1 or node2 and store its parent and level
      if (node === node1) node1Info = { parent, level };
      if (node === node2) node2Info = { parent, level };

      // If both nodes are found, exit the loop
      if (node1Info && node2Info) break;

      // Add children to the queue with updated parent and level information
      if (node.left) queue.push({ node: node.left, parent: node, level: level + 1 });
      if (node.right) queue.push({ node: node.right, parent: node, level: level + 1 });
    }

    // Check if both nodes are at the same level and have different parents
    return node1Info && node2Info && node1Info.level === node2Info.level && node1Info.parent !== node2Info.parent;
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize(tree) {
    // If the tree is empty, return an empty string
    if (!tree.root) return '';

    const queue = [tree.root];
    const result = [];

    // Perform BFS to serialize the tree
    while (queue.length > 0) {
      const node = queue.shift();

      // If the node is not null, add its value to the result
      // and enqueue its children (even if they are null)
      if (node) {
        result.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      } else {
        // If the node is null, add 'null' to the result
        result.push('null');
      }
    }

    // Join the result array into a string with commas
    return result.join(',');
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize(stringTree) {
    // If the input string is empty, return an empty tree
    if (!stringTree) return new BinaryTree();

    // Split the string by commas to get the node values
    const values = stringTree.split(',');

    // Create the root node from the first value
    const root = new BinaryTreeNode(parseInt(values[0]));
    const queue = [root];
    let index = 1;

    // Use BFS to reconstruct the tree
    while (queue.length > 0) {
      const current = queue.shift();

      // Check if there is a left child
      if (values[index] !== 'null') {
        current.left = new BinaryTreeNode(parseInt(values[index]));
        queue.push(current.left);
      }
      index++;

      // Check if there is a right child
      if (values[index] !== 'null') {
        current.right = new BinaryTreeNode(parseInt(values[index]));
        queue.push(current.right);
      }
      index++;
    }

    // Return the reconstructed tree
    return new BinaryTree(root);
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    // Helper function to find the LCA
    function findLCA(currentNode) {
      // Base case: if the current node is null, return null
      if (!currentNode) return null;

      // If the current node is either node1 or node2, return the current node
      if (currentNode === node1 || currentNode === node2) return currentNode;

      // Recursively find LCA in the left and right subtrees
      const leftLCA = findLCA(currentNode.left);
      const rightLCA = findLCA(currentNode.right);

      // If both left and right subtrees return non-null, currentNode is the LCA
      if (leftLCA && rightLCA) return currentNode;

      // Otherwise, return the non-null result from the left or right subtree
      return leftLCA || rightLCA;
    }

    // Call the helper function starting from the root of the tree
    return findLCA(this.root);
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
