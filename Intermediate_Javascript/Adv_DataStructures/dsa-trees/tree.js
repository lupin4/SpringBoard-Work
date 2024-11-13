/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    // If the tree is empty, return 0
    if (!this.root) return 0;

    // Initialize a queue for BFS and start with the root node
    const queue = [this.root];
    let sum = 0; // Initialize sum to 0

    // Perform BFS to sum up all node values
    while (queue.length > 0) {
      const current = queue.shift(); // Dequeue the next node
      sum += current.val; // Add the current node's value to the sum

      // Enqueue all children of the current node
      for (const child of current.children) {
        queue.push(child);
      }
    }

    // Return the total sum of all node values
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    // If the tree is empty, return 0
    if (!this.root) return 0;

    // Initialize a queue for BFS and start with the root node
    const queue = [this.root];
    let count = 0; // Initialize count of even values to 0

    // Perform BFS to count nodes with even values
    while (queue.length > 0) {
      const current = queue.shift(); // Dequeue the next node

      // Check if the current node's value is even
      if (current.val % 2 === 0) count++;

      // Enqueue all children of the current node
      for (const child of current.children) {
        queue.push(child);
      }
    }

    // Return the count of nodes with even values
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    // If the tree is empty, return 0
    if (!this.root) return 0;

    // Initialize a queue for BFS and start with the root node
    const queue = [this.root];
    let count = 0; // Initialize count of nodes greater than lowerBound to 0

    // Perform BFS to count nodes with values greater than lowerBound
    while (queue.length > 0) {
      const current = queue.shift(); // Dequeue the next node

      // Check if the current node's value is greater than lowerBound
      if (current.val > lowerBound) count++;

      // Enqueue all children of the current node
      for (const child of current.children) {
        queue.push(child);
      }
    }

    // Return the count of nodes with values greater than lowerBound
    return count;
  }
}

module.exports = { Tree, TreeNode };
