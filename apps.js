
// const title = document.getElementById("title");
// title.innerHTML = "Bangladesh";
// title.style.color = "green";
// title.style.fontSize = "50px";
// title.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";

// // class
// const example = document.getElementsByClassName("example")[0];
// example.innerHTML = "Our beauty country Bangladesh";
// example.style.color = "skyblue";
// example.style.fontSize = "40px";
// example.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";

// document.body.appendChild(heading);

// const imgs = [
//     "https://c.ndtvimg.com/2021-03/nc24gt3_ab-de-villiers-bcci-ipl_625x300_25_March_21.jpg"
// ]
// const boxContainer = document.getElementById("box-container");

// boxContainer.style.border = "5px solid black";
// boxContainer.style.padding = "50px";

// imgs.forEach(i{ img } => {
//     const box = document.createElement("div");
//     box.style.border = "4px solid green";
//     box.style.padding = "18px";
//     box.innerHTML = `
//     <img src="${img}" width="500" height="300px" loading="lazy" alt="">`;
//     boxContainer.appendChild(box);
// })
// console.log(boxContainer);

async function main() {
    const boxContainer = document.getElementById("box-container");

    const res = await fetch("https://www.rakibulhasanrakib.com/api/foods");
    const foods = await res.json();

    foods.forEach((food) => {
        const box = document.createElement("div");
        box.innerHTML = `
        <h1>Name: ${food.name}</h1>
        <h4> ${food.category}</h4>
        <h3>Price:${food.price}</h3>
        <p>${food.isVegetarian ? "Vegetarian" : "nonVegetarian"}</p >
    <img src="${food.image}" width="420" height="300" loading="lazy" alt="${food.name}">`;
        boxContainer.append(box);
    });
};

main();



