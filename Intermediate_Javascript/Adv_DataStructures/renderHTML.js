import { Node, Tree } from "./trees.js";

// Create the root node with isRoot = true
const rootNode = new Node("", "root", {}, true);

// Create a title and add it to the head
const title = rootNode.createHeader(1);
title.setTextContent("Trees");
rootNode.head.appendChild(title);

// Create a paragraph and append it to the body
const paragraph = rootNode.createP();
paragraph.setTextContent(
  "Hello, World! Welcome to Advanced Data Structures and Trees!"
);
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

const tree = new Tree(rootNode);

const unorderedList = new Node("ul", "ul", {}, false);
const listItem1 = new Node("li", "li", {}, false);
const listItem2 = new Node("li", "li", {}, false);

listItem1.setTextContent(
  "Trees are non-linear data structures that store hierarchical data"
);
listItem2.setTextContent("Item 2");

rootNode.body.appendChild(unorderedList);
rootNode.body.appendChild(listItem1);
rootNode.body.appendChild(listItem2);

unorderedList.appendChild(listItem1);
unorderedList.appendChild(listItem2);

// Render and replace the body content
const bodyContent = rootNode.body.render();
document.body.parentNode.replaceChild(bodyContent, document.body);

// Append the stylesheet to the actual document head
rootNode.appendStylesheet("style.css");
