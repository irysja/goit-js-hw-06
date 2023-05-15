
const categoriesList = document.getElementById("categories").children;
for (const item of categoriesList) {
    const title = item.querySelector("h2").textContent;
    const itemsCount = item.lastElementChild.children.length;
    console.log(`Category: ${title}, Elements: ${itemsCount}`);
}