let dish = ['Cheeseburger', 'Pizza Salami', 'Kebab Rolle', 'Chicken Salad', 'Dürüm Falafel'];
let prices = [6.90, 7.50, 6.70, 5.80, 6.50];
let shoppingbasket = [];

function generateMenu() {
    document.getElementById('dishTable').innerHTML = '';
    for (let i = 0; i < dish.length; i++) {
        const element = dish[i];
        document.getElementById('dishTable').innerHTML +=
            loadDivsForMenu(i, element);
    }
}

function  loadDivsForMenu() {
    
}

function addToBasket() {

}

function updateShoppingBasket() {
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
        sum += prices[i];
    }

}