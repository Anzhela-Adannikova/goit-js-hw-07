const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach(item => {
    const name = item.querySelector("h2").textContent;
    const nameEl = item.querySelectorAll("ul li").length;

    console.log(`Category: ${name}`);
    console.log(`Elements: ${nameEl}`);   
});