let dish = ['Cheeseburger', 'Pizza Salami', 'Kebab Rolle', 'Chicken Salad', 'Dürüm Falafel', 'Überbackene Rigatoni'];
let description = ['mit 180g Fleisch und Käse', 'mit Salami und Käse', 'mit Gyros, Salat und Cocktailsoße', 'mit Blattsalaten, Tomate und Parmesan', 'vegetarisch mit Salat und Joghurtsoße', 'mit Fleischsoße und Sahne']
let prices = [6.90, 7.50, 6.70, 5.80, 6.50, 7.80];
let shoppingbasketdish = [];
let shoppingbasketprices = [];
let amount = [1, 1, 1, 1, 1, 1];
let amountBasket = [];

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
            <div id="dishprice">${prices[i].toFixed(2)} €</div>
            </div>`;
}

function addToBasket(i) {
    let newdish = dish[i];
    let newprice = prices[i];
    let newamount = amount[i];
    shoppingbasketdish.push(newdish);
    shoppingbasketprices.push(newprice);
    document.getElementById('basketSubMain').innerHTML = '';
    for (let j = 0; j < shoppingbasketdish.length; j++) {
        const element2 = shoppingbasketdish[j];
        document.getElementById('basketSubMain').innerHTML +=
            loadDivsforBasket(i, j, element2);
    }
    loadBasketSum();
}

function loadDivsforBasket(i, j, element2) {
    return `<div class="menuCard">
                <div class="allDishesInCard"><p>${amount[j]}</p><p class="allDishesInCardDish">${shoppingbasketdish[j]}</p><p>${shoppingbasketprices[j].toFixed(2)} €</p></div>
                <div class="allDishesdescription"><p>${description[j]}</p></div>
                <div class="noteandicon"><p class="allDishesInCardDish">Anmerkung hinzufügen</p><div><img src="icons/minus48.png"><img src="icons/plus48.png"></div></div>
            </div>`;
    updateShoppingBasket();
}

function updateShoppingBasket() {
    if (shoppingbasketdish == '') {
        document.getElementById('basketSubMain').innerHTML += `
        <div class="emptybasket">Ihr Warenkorb ist aktuell leer. Bitte wählen Sie zunächst Ihre Speisen aus.</div>
        `;
    } else {
        let sum = 0;
        for (let i = 0; i < prices.length; i++) {
            sum += prices[i];
        }
    }
}

function loadBasketSum() {
    document.getElementById('basketSubMain').innerHTML +=`
    <div class="SumDiv"><div class="SumDivSub"><p>Zwischensumme</p><p>preis</p></div><div class="SumDivSub"><p>Lieferkosten</p><p>4,90 €</p></div><div class="SumDivSub"><p>Gesamt</p><p>summe</p></div></div>
    <div class="payButtonDiv"><button class="payButton" onclick="pay">BEZAHLEN</button></div>
    `;
}