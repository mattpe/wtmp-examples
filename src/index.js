import SodexoData from './modules/sodexo-data';
import FazerData from './modules/fazer-data';

let languageSetting = 'fi';

// console.log('index fasu', FazerData.getDailyMenu(languageSetting));

/**
 * Displays lunch menu items as html list
 *
 * @param {Array} menuData - Lunch menu array
 * @param {string} restaurant - element target id
 */
const renderMenu = (menuData, restaurant) => {
  const list = document.querySelector('#' + restaurant);
  list.innerHTML = '';
  for (const item of menuData) {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  }
};

/**
 * Switch app lang en/fi
 */
const switchLanguage = () => {
  if (languageSetting === 'fi') {
    languageSetting = 'en';
  } else {
    languageSetting = 'fi';
  }
  renderMenu(SodexoData.getDailyMenu(languageSetting), 'sodexo');
  renderMenu(FazerData.getDailyMenu(languageSetting), 'fazer');
  console.log('change language to: ', languageSetting);
};

/**
 * Sorts menu alphapetically
 *
 * @param {Array} menu
 * @param {string} order
 * @returns Sorted menu array
 */
const sortMenu = (menu, order) => {
  if (order == 'desc') {
    return menu.sort().reverse();
  } else {
    return menu.sort();
  }
};

/**
 * Eventhandler for sort menu button
 */
const renderSortedMenu = () => {
    renderMenu(sortMenu(SodexoData.getDailyMenu(languageSetting), 'asc'), 'sodexo');
    renderMenu(sortMenu(FazerData.getDailyMenu(languageSetting), 'asc'), 'fazer');
};

/**
 * Picks a random dish from lunch menu array
 *
 * @param {Array} menu
 * @returns string dish name
 */
const pickRandomDish = (menu) => {
  const randomIndex = Math.floor(Math.random() * menu.length);
  return menu[randomIndex];
};

const displayRandomDish = () => {
  alert(pickRandomDish(SodexoData.getDailyMenu(languageSetting)));
};


const init = () => {
  document.querySelector('#switch-lang').addEventListener('click', switchLanguage);
  document.querySelector('#sort-menu').addEventListener('click', renderSortedMenu);
  document.querySelector('#pick-dish').addEventListener('click', displayRandomDish);
  renderMenu(SodexoData.getDailyMenu(languageSetting), 'sodexo');
  renderMenu(FazerData.getDailyMenu(languageSetting), 'fazer');
  // TODO: render fazer data on page (use fazer-data.js module)
};
init();
