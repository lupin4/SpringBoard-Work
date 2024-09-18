const inventory = [];

export function addItem(item) {
    console.log("Adding item to inventory:", item);
    inventory.push(item);
}

export function removeItem(item) {
    console.log("Removing item from inventory:", item);
    inventory.splice(inventory.indexOf(item), 1);
}

export function listItems() { 
    console.log("Items:", inventory);
}
