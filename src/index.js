import Lunchmenu from './assets/sodexo-menu.json';

console.log('lunch menu json', Lunchmenu);

let coursesEn = [];
let coursesFi = [];
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
    renderMenu(coursesEn);
  } else {
    languageSetting = 'fi';
    renderMenu(coursesFi);
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
    renderMenu(sortMenu(coursesEn, 'asc'));
  } else {
    renderMenu(sortMenu(coursesFi, 'desc'));
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
  alert(pickRandomDish(coursesFi));
};


/**
 * Parses couse arrays from Sodexo json file
 *
 * @param {Object} sodexoDailyMenu
 */
const parseSodexoMenu = (sodexoDailyMenu) => {
  const courses = Object.values(sodexoDailyMenu);
  for (const course of courses) {
    coursesEn.push(course.title_en);
    coursesFi.push(course.title_fi);
  }
};


const init = () => {
  parseSodexoMenu(Lunchmenu.courses);
  document.querySelector('#switch-lang').addEventListener('click', switchLanguage);
  document.querySelector('#sort-menu').addEventListener('click', renderSortedMenu);
  document.querySelector('#pick-dish').addEventListener('click', displayRandomDish);
  renderMenu(coursesFi);
};
init();
