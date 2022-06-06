const main = document.querySelector("main");
const cards = [{
    currency: "$",
    price: "1.99",
    metal: "Trial",
    description: "This is 2 days membership",
},
{
    currency: "$",
    price: "2.20",
    metal: "Silver",
    description: "This is 7 days basic membership",
},
{
    currency: "$",
    price: "2.99",
    metal: "Bronze",
    description: "This is 30 days basic membership",
},
{
    currency: "$",
    price: "6.99",
    metal: "Gold",
    description: "This is 90 days basic membership",
},

{
    currency: "$",
    price: "149.99",
    metal: "Platinum",
    description: "Platinum Yearly Subscribtion",
    
}];
function creatcard(membership) {
    const card = document.createElement("article");
    const priceSection = document.createElement("div");
    card.appendChild(priceSection);
    main.appendChild(card);
    const text = document.createElement("p");
    const h3 = document.createElement("h3");
    h3.innerText = membership.currency + membership.price + " " + membership.metal;
    priceSection.appendChild(h3);
    card.appendChild(text);
    const span = document.createElement("span");
    priceSection.appendChild(span);
    span.innerText = membership.description;
}
cards.forEach(creatcard);



