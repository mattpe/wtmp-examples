/**
 * Functions for managing Fazer menu data
 *
 * TODO:
 * - import fazer json
 * - export module in correct form
 * - use module/data in index.js
 */
import FazerLunchMenuFi from '../assets/fazer-fi.json';
import FazerLunchMenuEn from '../assets/fazer-en.json';

console.log('FazerData', FazerLunchMenuFi, FazerLunchMenuEn);

/**
 * Returns a daily menu array from Fazer weekly json data
 * @param {Object} menuData
 * @param {Number} dayOfWeek week day 0-6
 * @returns {Array} daily menu
 */
const parseDailyMenu = (menuData, dayOfWeek) => {

  let dailyMenu = menuData.LunchMenus[dayOfWeek].SetMenus.map(setMenu => {
    // console.log(setMenu);
    let mealName = setMenu.Name;
    let dishes = setMenu.Meals.map(dish => {
      return `${dish.Name} (${dish.Diets.join(', ')})`;
    });
    return mealName ? `${mealName}: ${dishes.join(', ')}` : dishes.join(', ');
  });
  return dailyMenu;
};

const getDailyMenu = (lang, dayOfWeek = 0) => {
  return (lang === 'fi') ?
    parseDailyMenu(FazerLunchMenuFi, dayOfWeek)
    :
    parseDailyMenu(FazerLunchMenuEn, dayOfWeek);
};

// console.log('debug fasu', getDailyMenu('fi'));

const FazerData = {getDailyMenu};

export default FazerData;
