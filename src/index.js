import SodexoData from './modules/sodexo-data';

let languageSetting = 'fi';

/**
 * Displays lunch menu items as html list
 *
 * @param {Array} menu - Lunch menu array
 */
const renderMenu = (menu) => {
  const list = document.querySelector('#sodexo');
  list.innerHTML = '';
  for (const item of menu) {
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
    renderMenu(SodexoData.coursesEn);
  } else {
    languageSetting = 'fi';
    renderMenu(SodexoData.coursesFi);
  }
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
  if (languageSetting === 'en') {
    renderMenu(sortMenu(SodexoData.coursesEn, 'asc'));
  } else {
    renderMenu(sortMenu(SodexoData.coursesFi, 'desc'));
  }
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
  alert(pickRandomDish(SodexoData.coursesFi));
};


const init = () => {
  document.querySelector('#switch-lang').addEventListener('click', switchLanguage);
  document.querySelector('#sort-menu').addEventListener('click', renderSortedMenu);
  document.querySelector('#pick-dish').addEventListener('click', displayRandomDish);
  renderMenu(SodexoData.coursesFi);
  // TODO: render fazer data on page (use fazer-data.js module)
};
init();
