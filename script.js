"use strict";
let menus = [
    {
        meal: "Classic Breakfast", food: "Eggs with toast, bacon and coffee", Price: 20, Image: "toast.jpg"
    },
    {
        meal: "Classic Lunch", food: "Vegetables, tomatoes, mushrooms", Price: 20, Image: "lunch.jpg"
    },
    {
        meal: "Classic steak", food: "Spiced, potatoe, meat full grilled", Price: 20, Image: "steak.jpg"
    }
];
let result = document.getElementById('result');
menus.forEach(menus => {
    result.innerHTML +=
        `
        <div>
            <div class="card" style="width: 22rem; mw">
                <img src="photos/${menus.Image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3 class="card-title">Menu: ${menus.meal}</h3>
                    <fs-4 class="card-title">Ingredients: ${menus.food}</fs-4>
                    <h3 class="card-text text-warning"> Price: ${menus.Price}</h3>
                    <a class="btn btn-primary add-to-cart">Order online</a>
                </div>
            </div>
        </div>
    `;
});
