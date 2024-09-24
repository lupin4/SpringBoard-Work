// Trees are non-linear data structures that store elements in a hierarchical manner.
// They are used to represent hierarchical data, such as file systems, organization charts, and more.
// Trees consist of nodes, where each node can have zero or more child nodes.
// The topmost node is called the root, and nodes without any children are called leaves.
// Trees are used in various applications, including:
// - File systems
// - Organization charts
// - Decision trees in machine learning
// - XML/HTML documents

// Trees are recursive data structures, meaning each node can be considered as a tree itself.
// This recursive nature allows for efficient traversal and manipulation of tree data.

// Common operations on trees include:
// - Insertion of nodes
// - Deletion of nodes
// - Search for a node
// - Traversal (visiting all nodes)

// Types of Trees:
// - Binary Trees: Each node has at most two children.
// - Binary Search Trees (BST): A binary tree where the left child's value is less than the parent's value, and the right child's value is greater.
// - Heaps: A binary tree where the parent node's value is either greater or less than the child nodes.
// - Tries: A tree-like data structure used for storing a dynamic set of strings.
// - Trees in Graph Theory: Nodes and edges forming a tree structure.

// Tree Traversal:
// - Depth-First Search (DFS): Traverses as deep as possible along each branch before backtracking.
// - Breadth-First Search (BFS): Traverses all nodes at the current level before moving to the next level.

// Tree Representation:
// - Nodes are typically represented by objects or classes.
// - Each node contains data and references to its child nodes.

// Example:
// Consider a simple tree representing an html page

class Node {
  constructor(value, tagName, attributes = {}, isRoot = false) {
    this.value = value;
    this.tagName = tagName;
    this.attributes = attributes;
    this.children = [];
    this.textContent = "";

    if (isRoot) {
      // Automatically construct html, head, and body
      const html = this.#createHtml(attributes);
      this.appendChild(html);

      const head = this.#createHead();
      html.appendChild(head);

      const body = this.#createBody();
      html.appendChild(body);

      // Store references for easy access
      this.html = html;
      this.head = head;
      this.body = body;
    }
  }

  appendChild(childNode) {
    this.children.push(childNode);
  }

  setAttribute(name, value) {
    this.attributes[name] = value;
    return this; // For chaining
  }

  setTextContent(text) {
    this.textContent = text;
    this.value = text; // Assuming 'value' holds text content
    return this; // For chaining
  }

  setValue(value) {
    this.value = value;
    return this; // For chaining
  }

  // Methods for creating specific HTML elements
  createDiv(attributes = {}) {
    return new Node("", "div", attributes);
  }

  createP(attributes = {}) {
    return new Node("", "p", attributes);
  }

  createSpan(attributes = {}) {
    return new Node("", "span", attributes);
  }

  createHeader(level = 1, attributes = {}) {
    const tagName = `h${level}`;
    return new Node("", tagName, attributes);
  }

  createImage(src, alt = "", attributes = {}) {
    return new Node("", "img", { src, alt, ...attributes });
  }

  createLink(href, text = "", attributes = {}) {
    return new Node(text, "a", { href, ...attributes });
  }

  // Private instance methods to create html, head, and body
  #createHtml(attributes = {}) {
    return new Node("", "html", attributes);
  }

  #createHead(attributes = {}) {
    return new Node("", "head", attributes);
  }

  #createBody(attributes = {}) {
    return new Node("", "body", attributes);
  }

  // Method to render the custom Node tree into actual DOM elements
  render() {
    // Create the DOM element for this node
    const element = document.createElement(this.tagName);

    // Set attributes
    for (const [key, value] of Object.entries(this.attributes)) {
      element.setAttribute(key, value);
    }

    // Set text content
    if (this.textContent) {
      element.textContent = this.textContent;
    }

    // Render and append child elements recursively
    for (const child of this.children) {
      const childElement = child.render();
      element.appendChild(childElement);
    }

    return element;
  }
}


// Create the root node with isRoot = true
const rootNode = new Node('', 'root', {}, true);

// Create a title and add it to the head
const title = rootNode.createHeader(1);
title.setTextContent('My Page Title');
rootNode.head.appendChild(title);

// Create a paragraph and append it to the body
const paragraph = rootNode.createP();
paragraph.setTextContent('Hello, World!');
rootNode.body.appendChild(paragraph);

// Render the custom node tree into DOM elements
const domElement = rootNode.html.render();

// Append the rendered DOM element to the document body
document.body.appendChild(domElement);

