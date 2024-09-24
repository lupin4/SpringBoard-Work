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
  // Method to find a node with a specific value or tag name using DFS
  findDFS(valueOrTagName) {
    // Check if the current node matches the search term
    if (this.value === valueOrTagName || this.tagName === valueOrTagName) {
      return this;
    }

    // Recursively search in each child
    for (const child of this.children) {
      const found = child.findDFS(valueOrTagName);
      if (found) {
        return found;
      }
    }

    // If the node is not found, return null
    return null;
  }

  // Method to find a node with a specific value or tag name using BFS
  findBFS(valueOrTagName) {
    // Use a queue to implement BFS
    const queue = [this];

    while (queue.length > 0) {
      const current = queue.shift();

      // Check if the current node matches the search term
      if (
        current.value === valueOrTagName ||
        current.tagName === valueOrTagName
      ) {
        return current;
      }

      // Add all children of the current node to the queue
      for (const child of current.children) {
        queue.push(child);
      }
    }

    // If the node is not found, return null
    return null;
  }

  // Method to append a stylesheet to the real head element
  appendStylesheet(href) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = href;
    document.head.appendChild(link);
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
  createDiv({ layout = {}, size = {}, spacing = {}, ...attributes } = {}) {
    const styleAttributes = {
      ...attributes,
      style: this.#generateStyleString({ ...layout, ...size, ...spacing }),
    };
    return new Node("", "div", styleAttributes);
  }

  createP(attributes = {}) {
    return new Node("", "p", attributes);
  }

  createSpan(attributes = {}) {
    return new Node("", "span", attributes);
  }
  createH1(attributes = {}) {
    return new Node("", "h1", attributes);
  }
  createH2(attributes = {}) {
    return new Node("", "h2", attributes);
  }
  createH3(attributes = {}) {
    return new Node("", "h3", attributes);
  }
  createH4(attributes = {}) {
    return new Node("", "h4", attributes);
  }
  createH5(attributes = {}) {
    return new Node("", "h5", attributes);
  }
  createH6(attributes = {}) {
    return new Node("", "h6", attributes);
  }
  createSection(attributes = {}) {
    return new Node("", "section", attributes);
  }
  createButton(attributes = {}) {
    return new Node("", "button", attributes);
  }
  createInput(attributes = {}) {
    return new Node("", "input", attributes);
  }
  createLabel(attributes = {}) {
    return new Node("", "label", attributes);
  }
  createForm(attributes = {}) {
    return new Node("", "form", attributes);
  }
  createTextarea(attributes = {}) {
    return new Node("", "textarea", attributes);
  }

  createTable(attributes = {}) {
    return new Node("", "table", attributes);
  }
  createLabel(attributes = {}) {
    return new Node("", "label", attributes);
  }

  createHeader(level = 1, attributes = {}) {
    const tagName = `h${level}`;
    return new Node("", tagName, attributes);
  }

  createImage(src, alt = "", { size = {}, layout = {}, ...attributes } = {}) {
    const imgAttributes = {
      src,
      alt,
      ...attributes,
      ...size, // Apply size attributes (e.g., width, height)
      ...layout, // Apply layout attributes or classes
    };
    return new Node("", "img", imgAttributes);
  }

  createLink(href, text = "", attributes = {}) {
    const linkNode = new Node("", "a", { href, ...attributes });
    linkNode.setTextContent(text);
    return linkNode;
  }
  createNav(attributes = {}) {
    return new Node("", "nav", attributes);
  }

  createUl(attributes = {}) {
    return new Node("", "ul", attributes);
  }

  createLi(attributes = {}) {
    return new Node("", "li", attributes);
  }

  createVideo(attributes = {}) {
    return new Node("", "video", attributes);
  }

  createAudio(attributes = {}) {
    return new Node("", "audio", attributes);
  }

  createCanvas(attributes = {}) {
    return new Node("", "canvas", attributes);
  }

  createTr(attributes = {}) {
    return new Node("", "tr", attributes);
  }

  createTd(attributes = {}) {
    return new Node("", "td", attributes);
  }

  createTh(attributes = {}) {
    return new Node("", "th", attributes);
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

  // Helper method to generate a style string from an object
  #generateStyleString(styles) {
    return Object.entries(styles)
      .map(([key, value]) => `${key}: ${value};`)
      .join(" ");
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

// **************************************************
// **************************************************
// Example Usage
// **************************************************

// Create the root node with isRoot = true
const rootNode = new Node("", "root", {}, true);

// Create a title and add it to the head
const title = rootNode.createHeader(1);
title.setTextContent("My Page Title");
rootNode.head.appendChild(title);

// Create a paragraph and append it to the body
const paragraph = rootNode.createP();
paragraph.setTextContent("Hello, World!");
rootNode.body.appendChild(paragraph);

// Create a div to wrap the image
const container = rootNode.createDiv({ class: "image-container" });

// Create an image and add it to the container
const image = rootNode.createImage(
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "A beautiful landscape",
  { size: { width: "100%", height: "800px" } }
);
container.appendChild(image);

// Append the container to the body
rootNode.body.appendChild(container);

// Create a link and add it to the body with visible text
const link = rootNode.createLink("https://www.google.com", "Click here");
rootNode.body.appendChild(link);

// Render and replace the body content
const bodyContent = rootNode.body.render();
document.body.parentNode.replaceChild(bodyContent, document.body);

// Append the stylesheet to the actual document head
rootNode.appendStylesheet("style.css");

// Create a div with styles using the createDiv method amd the style object

// const divWithStyles = rootNode.createDiv({
//   layout: {
//     display: "flex",
//     justifyContent: "center", // Text will align to the start of the flex container
//     alignItems: "center",
//     border: "3px solid navy",
//     borderRadius: "10px", // Add this line to make the border rounded
//     flexDirection: "column",
//     textAlign: "center", // Change from "center" to "left" to align text to the left
//   },
//   size: { width: "100%", height: "100px" },
//   spacing: { margin: "10px", padding: "20px" },
//   class: "my-div",
// });

// Create a paragraph with centered text using CSS class
// const centeredParagraph = rootNode.createP({
//   class: "centered-text rounded-border" // Use CSS classes for styling
// });
// centeredParagraph.setTextContent("This is a styled div.");

// // Append the paragraph to the divWithStyles
// divWithStyles.appendChild(centeredParagraph);

// // Append the divWithStyles to the body or another container within your Node structure
// rootNode.body.appendChild(divWithStyles);



// Render the custom node tree into DOM elements
// const domElement = rootNode.html.render();

// // Append the rendered DOM element to the document body
// document.body.appendChild(domElement);

// Assuming rootNode is an instance of Node and has been populated with children
const foundNode = rootNode.findDFS("p"); // Finds the first <p> tag in the tree
if (foundNode) {
  console.log("Node found:", foundNode);
} else {
  console.log("Node not found.");
}

// Method to create and append a link element for the CSS file
function appendStylesheet(href) {
  const link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', href);
  document.head.appendChild(link);
}

// Call this function to append the stylesheet

// In this example, a simple tree structure was created to represent an HTML page.
// The root node is the html element, which contains a head and body.
// then added a title to the head and a paragraph to the body.
// also created a div to wrap an image and added a link to the body.
// Finally, the custom node tree rendered into actual DOM elements and appended it to the document body.

// This example demonstrates how trees can be used to represent hierarchical data structures and how nodes can be created and manipulated to build complex structures.
// This is a basic HTML template builder using trees.

// Depth-First Search (DFS) is a tree traversal algorithm that explores as far as possible along each branch before backtracking.
// It is often implemented using recursion or a stack.
// DFS can be used to search for a specific node, check if a node exists, or traverse the entire tree.
// It is useful when the tree is deep and the target node is near the root.
// The algorithm starts at the root and explores as far as possible along each branch before backtracking.
// It uses a stack to keep track of the nodes to be explored.
// The algorithm is efficient for trees with a small number of nodes.
// It is also used in various applications, such as:
// - Finding connected components in a graph
// - Solving puzzles like mazes
// - Parsing expressions
// - Compiling code
// - Web crawling
// - Database querying
// - Artificial intelligence
// - Machine learning
// - Decision making


//  Here is a simple example of a tree and a DFS traversal:

// Example Tree:
//         A
//        / \
//       B   C
//      / \   \
//     D   E   F

// DFS Traversal:
// Start at A, explore B, then D, then E, then C, then F.   
// The traversal order is A -> B -> D -> E -> C -> F.

// Breadth-First Search (BFS) is a tree traversal algorithm that explores all nodes at the current level before moving to the next level.
// It is often implemented using a queue.
// BFS can be used to search for a specific node, check if a node exists, or traverse the entire tree.
// It is useful when the tree is wide and the target node is near the root.
// The algorithm starts at the root and explores all nodes at the current level before moving to the next level.
// It uses a queue to keep track of the nodes to be explored.
// The algorithm is efficient for trees with a small number of nodes.
// It is also used in various applications, such as:
// - Finding the shortest path in a graph
// - Solving puzzles like mazes
// - Compiling code
// - Web crawling
// - Database querying
// - Artificial intelligence
// - Machine learning
// - Decision making




