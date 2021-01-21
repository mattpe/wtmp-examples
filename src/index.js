/**
 * Week 2 Task 2 examples
 */

const menu = [
    {name: 'Lingonberry jam', price: 4.00},
    {name: 'Mushroom and bean casserole', price: 5.50},
    {name: 'Chili-flavoured wheat', price: 3.00},
    {name: 'Vegetarian soup', price: 4.80},
    {name: 'Pureed root vegetable soup with smoked cheese', price: 8.00}
  ];

/**
 * 1. Function validates a meal name based on regex rules
 *
 * @param {string} mealName
 * @returns boolean - name is valid
 */
const validateMealName = (mealName) => {
  const namePattern = /^[A-ZÅÄÖ]{1}[a-zåäöA-ZÅÄÖ0-9\-\ \/,()]{3,63}$/;
  return namePattern.test(mealName);
};

// Test validation
console.log('mealname is valid:', validateMealName('Lingonberry jam'));

for (const item of Object.values(menu)) {
  console.log('mealname ' + item.name + ' is valid:', validateMealName(item.name));
}

/**
 * 2. Sort
 *
 * @param {Array} menu
 */
const sortMenu = (menu) => {
  const sortedMenu = menu.sort((a, b) => a.price - b.price);
  return sortedMenu;
};
console.log('sorted menu', sortMenu(menu));

/**
 * 3. Filter meal from menu by price limit
 */
const filterMealsByPriceLimit = (menu, priceLimit) => {
  return menu.filter(item => item.price < priceLimit);
};
console.log('filtered menu', filterMealsByPriceLimit(menu, 5));

/**
 * 4. Raise all meal prices by percentage
 *
 * @param {Array} menu
 * @param {number} percent
 * @returns array
 */
const raisePricesByPercent = (menu, percent) => {
  return menu.map(item => {
    return {
      name: item.name,
      price: item.price * (1 + percent / 100)
    };
  });
};
console.log('price raised:', raisePricesByPercent(menu, 15));

/**
 * 5. Calculate total price for a menu array
 * @param {*} menu
 */
const calculateMenuTotalPrice = (menu) => {
  return menu.reduce((a, b) => {
    return {price: a.price + b.price};
  });
};
console.log('total cost', calculateMenuTotalPrice(menu));


// B, Fazer menu data

import FazerMenu from './assets/fazer-week-example.json';
console.log('FazerMenu', FazerMenu);

/**
 * Chooses vegetarian meal names from a menu data array
 *
 * @param {*} menuData
 */
const selectVegeMeals = (menuData) => {
  let vegeMeals = [];
  console.log(menuData.LunchMenus[0].SetMenus);
  for (const setMenu of menuData.LunchMenus[0].SetMenus) {
    console.log(setMenu);
    for (const meal of setMenu.Meals) {
      if (meal.Diets.includes('Veg')) {
        vegeMeals.push(meal.Name);
      }
    }
  }
  return vegeMeals;
};
console.log('test vege meal function', selectVegeMeals(FazerMenu));

