let dish = ['Cheeseburger', 'Pizza Salami', 'Kebab Rolle', 'Chicken Salad', 'Dürüm Falafel', 'Überbackene Rigatoni'];
let description = ['mit 180g Fleisch und Käse', 'mit Salami und Käse', 'mit Gyros, Salat und Cocktailsoße', 'mit Blattsalaten, Tomate und Parmesan', 'vegetarisch mit Salat und Joghurtsoße', 'mit Fleischsoße und Sahne']
let prices = [6.90, 7.50, 6.70, 5.80, 6.50, 7.80];
let shoppingbasket = [];

function generateMenu() {
    document.getElementById('dishTable').innerHTML = '';
    for (let i = 0; i < dish.length; i++) {
        const element = dish[i];
        document.getElementById('dishTable').innerHTML +=
            loadDivsForMenu(i, element);
    }
}

function  loadDivsForMenu(i, element) {
    return `<div class="card"><div class="dishHead">
                <p>${dish[i]}</p><img onclick="addToBasket(${i})" class="" src="icons/plus48.png">
            </div>
            <div class="dishDescription">
                <p>${description[i]}</p>
            </div>
            <div id="dishprice">${prices[i].toFixed(2)} €</div>
            </div>`;
}

function addToBasket() {
    
}

function updateShoppingBasket() {
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
        sum += prices[i];
    }

}