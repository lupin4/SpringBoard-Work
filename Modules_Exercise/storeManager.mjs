import { addItem, removeItem, listItems } from "./inventory.mjs";

addItem("Sword");
addItem("Dagger");
addItem("Potion of Healing");
addItem("Potion of Mana");
addItem("Thieves' Tools");
addItem("Large Satchel") 
listItems();
removeItem("Potion of Mana");
listItems();
