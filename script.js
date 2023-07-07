let dish = ['Cheeseburger', 'Pizza Salami', 'Kebab Rolle', 'Chicken Salad', 'Dürüm Falafel', 'Überbackene Rigatoni'];
let description = ['mit 180g Fleisch und Käse', 'mit Salami und Käse', 'mit Gyros, Salat und Cocktailsoße', 'mit Blattsalaten, Tomate und Parmesan', 'vegetarisch mit Salat und Joghurtsoße', 'mit Fleischsoße und Sahne']
let prices = [6.90, 7.50, 6.70, 5.80, 6.50, 7.80];
let shoppingbasketdish = [];
let shoppingbasketprices = [];
let amount = [1, 1, 1, 1, 1, 1];
let amountBasket = [1, 1, 1, 1, 1, 1];

function generateMenu() {
    document.getElementById('dishTable').innerHTML = '';
    for (let i = 0; i < dish.length; i++) {
        const element = dish[i];
        document.getElementById('dishTable').innerHTML +=
            loadDivsForMenu(i, element);
    }
    updateShoppingBasket();
}

function loadDivsForMenu(i, element) {
    return `<div class="card">
                <div class="dishHead"><p>${dish[i]}</p><img onclick="addToBasket(${i})" class="" src="icons/plus48.png">
            </div>
            <div class="dishDescription"><p>${description[i]}</p>
            </div>
            <div id="dishprice">${prices[i].toFixed(2).replace('.', ',')} €</div>
            </div>`;
}

function addToBasket(i, j) {
    let newdish = dish[i];
    let newprice = prices[i];
    let search = shoppingbasketdish.indexOf(dish[i]);
    if (search != -1) {
        amountBasket[i]++;
        addToBasketMainDiv(i, j,);
    } else {
        shoppingbasketdish.push(newdish);
        shoppingbasketprices.push(newprice);
        addToBasketMainDiv(i, j,);
    };
}

function addToBasketMainDiv(i, j) {
    document.getElementById('basketSubMain').innerHTML = '';
    for (let j = 0; j < shoppingbasketdish.length; j++) {
        const element2 = shoppingbasketdish[j];
        document.getElementById('basketSubMain').innerHTML +=
            loadDivsforBasket(i, j, element2);
    };
    updateShoppingBasket();
}

function loadDivsforBasket(i, j, element2) {
    let amountprices = amountBasket[i] * shoppingbasketprices[j];
    return `<div class="menuCard">
                <div class="allDishesInCard"><p>${amountBasket[i]}</p><p class="allDishesInCardDish">${shoppingbasketdish[j]}</p><p>${amountprices.toFixed(2).replace('.', ',')} €</p></div>
                <div class="allDishesdescription"><p>${description[j]}</p></div>
                <div class="noteandicon"><p class="allDishesInCardDish">Anmerkung hinzufügen</p><div><img src="icons/minus48.png"><img src="icons/plus48.png"></div></div>
            </div>`;
}

function updateShoppingBasket() {
    if (shoppingbasketdish == '') {
        document.getElementById('basketSubMain').innerHTML += `
        <div class="emptybasket">Ihr Warenkorb ist aktuell leer. Bitte wählen Sie zunächst Ihre Speisen aus.</div>
        `;
    } else {
        let sum = 0;
        for (let i = 0; i < shoppingbasketprices.length; i++) {
            sum += amountBasket[i] * shoppingbasketprices[i];
        };
        loadBasketSum(sum);
    };
}

function loadBasketSum(sum) {
    let finalsum = sum + 4.90;
    document.getElementById('basketSum').innerHTML = '';
    document.getElementById('basketSum').innerHTML += `
    <div class="SumDiv"><div class="SumDivSub"><p>Zwischensumme</p><p>${sum.toFixed(2).replace('.', ',')} €</p></div><div class="SumDivSub"><p>Lieferkosten</p><p>4,90 €</p></div><div class="SumDivSub"><p>Gesamt</p><p>${finalsum.toFixed(2).replace('.', ',')} €</p></div></div>
    <div class="payButtonDiv"><button class="payButton" onclick="pay">BEZAHLEN</button></div>
    `;
}