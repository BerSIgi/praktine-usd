const main = document.querySelector("main");
const cards = [
   currency: "$",
   price: "1.99",
   metal: "Trial",
   description: "This is 2days membership";
    "2.20",
    "2.99",
    "6.99",
    "149.99",
];
function kortele(kaina){
    const card = document.createElement("article");
    main.appendChild(card);
    const text = document.createElement("p");
    text.innerText = kaina;
    card.appendChild(text);
}
cards.forEach(kortele);



