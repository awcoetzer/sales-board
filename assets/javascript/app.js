'use strict';

/* 
  to an effort to keep this document clean, as well as
  practicing importing and exporting functions, I
  placed the theme function containing the colors
  in a separated file.
*/
import { lightTheme, darkTheme } from "./themes.js";

// grouped the sales/product buttons
const salesBtnEl = document.querySelectorAll('.sales-btn');
const salesCounterEl = document.getElementById('sales-counter-el');
const salesTextEl = document.querySelector('.sales-text');
const achievementsCounterEl = document.getElementById('achievement-counter-el');
const achievementTextEl = document.querySelector('.achievements-text');
const revenueTextEl = document.getElementById('revenue-text-el');
const commisionTextEl = document.getElementById('commision-text-el');
const themeLightBtnEl = document.getElementById('theme-icon-sun');
const themeDarkBtnEl = document.getElementById('theme-icon-moon');
const resetBtnEl = document.getElementById('reset-btn');

let themeValue, salesArr, salesCount, achievementsArr, achievementsCount, revenue, revenueTarget,  commision;

/*
  placed both products in a single array
  ❓ Please could you let me know if my approach 
  here is recommended, because I am selecting both sale 
  buttons in a single query selector. I decided to 
  put both products in a single array so when 
  iterating over each button I can easily match 
  the product information with the corresponding button
  via the index number.
*/
const productsArr = [
  {
    emoji: "⭐",
    revenue: 200,
    commision: 50
  },
  {
    emoji: "🔥",
    revenue: 300,
    commision: 75
  }
]

/*
  I decided to place the achievements in a single object, instead of 
  separate like it was given, again I probably didnt have to do this 
  and could use these values directly where needed, however in the sake 
  of practice and utilizing what we learn't so, I took this 
  approach.
  ❓ Please could you let me know if this approach is actually 
  recommended for future projects or if I should place these 
  values directly in the renderAchievements function:
  ( if (salesArr.length === 1) achievementsArr.push(achievementsObj.bell) ) or
  ( if (salesArr.length === 1) achievementsArr.push('🔔') )
*/
const achievements = {
  bell: '🔔',
  money: '💰',
  trophy: '🏆'
}

/*
  When the text begins to overflow, it scrolls
  with the text. I dont know the word for it but
  it feels more active or resposive to the user, 
  well at least for me it does.
*/
const scrollWithText = function () {
  salesTextEl.scrollLeft = salesTextEl.scrollWidth
  achievementTextEl.scrollLeft = achievementTextEl.scrollWidth
}

/* LOCAL DATABASE FUNCTIONS */
const setThemeFromLocal = function () {
  if (localStorage.hasOwnProperty('theme')) {
    themeValue = JSON.parse(localStorage.getItem('theme'));
  } else {
    themeDarkBtnEl.classList.add('active-theme');
  }

  if (themeValue === 'dark') {
    darkTheme()
    themeDarkBtnEl.classList.add('active-theme');
    themeLightBtnEl.classList.remove('active-theme');
  }

  if (themeValue === 'light') {
    lightTheme()
    themeLightBtnEl.classList.add('active-theme');
    themeDarkBtnEl.classList.remove('active-theme');
  }
}

/*
  ❓ One thing you will see over this js file is
  that I separated nearly everything into its 
  own function. Should I put all of this into it
  a single function instead or is this current approach
  recommended for being more modular?
*/
const setSalesTextFromLocal = function () {
  if (localStorage.hasOwnProperty('salesTextInLocal')) {
    salesArr = JSON.parse(localStorage.getItem('salesTextInLocal'));
    for (let i = 0; i < salesArr.length; i++) {
      salesTextEl.textContent += salesArr[i];
    }
  } else {
    salesTextEl.textContent = ''
  }
  scrollWithText()
}

const setAchievementsTextFromLocal = function () {
  if (localStorage.hasOwnProperty('achievementsInLocal')) {
    achievementsArr = JSON.parse(localStorage.getItem('achievementsInLocal'));
    for (let i = 0; i < achievementsArr.length; i++) {
      achievementTextEl.textContent += achievementsArr[i];
    }
  } else {
    achievementTextEl.textContent = ''
  }
  scrollWithText()
}

const setRevenueFromLocal = function () {
  if (localStorage.hasOwnProperty('revenueInLocal')) {
    revenue = JSON.parse(localStorage.getItem('revenueInLocal'));
    revenueTextEl.textContent = `$ ${revenue}`
  } else {
    revenueTextEl.textContent = '$ 0'
  }
}

const setRevenueTargetFromLocal = function () {
  if (localStorage.hasOwnProperty('revenueTargetInLocal')) {
    revenueTarget = JSON.parse(localStorage.getItem('revenueTargetInLocal'))
  } else {
    revenueTarget = 0;
  }
}

const setCommisionFromLocal = function () {
  if (localStorage.hasOwnProperty('commisionInLocal')) {
    commision = JSON.parse(localStorage.getItem('commisionInLocal'));
    commisionTextEl.textContent = `$ ${commision}`
  } else {
    commisionTextEl.textContent = '$ 0'
  }
}

const setCountersFromLocal = function () {
  if (localStorage.hasOwnProperty('salesCounter')) {
    salesCount = JSON.parse(localStorage.getItem('salesCounter'));
    salesCounterEl.textContent = salesCount;
  } else {
    salesCounterEl.textContent = '0';
  }

  if (localStorage.hasOwnProperty('achievementsCounter')) {
    achievementsCount = JSON.parse(localStorage.getItem('achievementsCounter'));
    achievementsCounterEl.textContent = achievementsCount;
  } else {
    achievementsCounterEl.textContent = '0';
  }
}

/*
  ❓ Is this init function known as a 
  constructor function?
*/
const init = function () {
  themeValue = '';
  salesArr = [];
  salesCount = 0;
  achievementsArr = [];
  achievementsCount = 0;
  revenue = 0;
  revenueTarget = 0;
  commision = 0;

  setThemeFromLocal();
  setSalesTextFromLocal();
  setRevenueFromLocal();
  setRevenueTargetFromLocal();
  setCommisionFromLocal();
  setAchievementsTextFromLocal();
  setCountersFromLocal();
}

init();

/* EVENT HANDLERS SECTION */
// toggle theme indicator to display which theme is active
const toggleActiveThemeIndicator = function (themeAdd, themeRemove) {
  themeAdd.classList.add('active-theme');
  themeRemove.classList.remove('active-theme');
}

const changeToLightTheme = function () {
  themeValue = 'light';

  toggleActiveThemeIndicator(themeLightBtnEl, themeDarkBtnEl)

  localStorage.setItem('theme', JSON.stringify(themeValue));

  lightTheme();
}

const changeToDarkTheme = function () {
  themeValue = 'dark';

  toggleActiveThemeIndicator(themeDarkBtnEl, themeLightBtnEl)

  localStorage.setItem('theme', JSON.stringify(themeValue));

  darkTheme();
}

/*
  Due to me adding both products in a single 
  array, I am just it iterating over it  as i am also 
  iterating over the sale buttons. 
  Other than that, it simply just adds the values to 
  either the revenue or commision commision variables.
*/
const renderRevenueAndCommision = function (index, productArr) {
  if (index) {
    // productB / productArr[1]
    revenue += productArr[index].revenue
    commision += productArr[index].commision
  } else {
    // productA / productArr[0]
    revenue += productArr[index].revenue
    commision += productArr[index].commision
  }

  revenueTextEl.textContent = `$ ${revenue}`;
  commisionTextEl.textContent = `$ ${commision}`;

  localStorage.setItem('revenueInLocal', JSON.stringify(revenue));
  localStorage.setItem('commisionInLocal', JSON.stringify(commision));
}

const renderSales = function (index, productArr) {
  salesArr.push(productArr[index].emoji);

  salesTextEl.textContent = salesArr.join('');
  localStorage.setItem('salesTextInLocal', JSON.stringify(salesArr));
  scrollWithText()
}

/*
  ❓ Within the achievements, I have made it so
  that on every 2400 revenue generated it gives an 
  achievement the same with every 15th sale, what I 
  wanted to ask is, is this a recommended way of adding 
  this sort of check, especially with the 2400 marker/goal.
*/
const renderAchievements = function (achievementsObj, index, productArr) {
  if (salesArr.length === 1) {
    achievementsArr.push(achievementsObj.bell)
  }

  revenueTarget += productArr[index].revenue;
  console.log(revenueTarget);

  if (revenueTarget >= 2400) {
    revenueTarget = 0;
    achievementsArr.push(achievementsObj.money);
  }
  
  if (salesArr.length % 15 === 0) {
    achievementsArr.push(achievementsObj.trophy)
  }

  achievementTextEl.textContent = achievementsArr.join('');
  localStorage.setItem('achievementsInLocal', JSON.stringify(achievementsArr));
  localStorage.setItem('revenueTargetInLocal', JSON.stringify(revenueTarget));
  scrollWithText()
}

const renderCounters = function () {
  salesCount = salesArr.length;
  achievementsCount = achievementsArr.length;

  salesCounterEl.textContent = salesCount;
  achievementsCounterEl.textContent = achievementsCount;

  localStorage.setItem('salesCounter', JSON.stringify(salesCount))
  localStorage.setItem('achievementsCounter', JSON.stringify(achievementsCount))
}

/* 
  Instead of resetting all values, which would
  include the theme, I have chosen to select
  certain keys for removal, so the user can
  keep their theme of choice.
*/
const resetAll = function () {
  localStorage.removeItem('revenueInLocal');
  localStorage.removeItem('revenueTargetInLocal');
  localStorage.removeItem('commisionInLocal');
  localStorage.removeItem('salesTextInLocal');
  localStorage.removeItem('achievementsInLocal');
  localStorage.removeItem('salesCounter');
  localStorage.removeItem('achievementsCounter');

  init()
}

/* EVENT LISTENERS SECTION */
for (let i = 0; i < salesBtnEl.length; i++) {
  salesBtnEl[i].addEventListener('click', function () {
    renderRevenueAndCommision(i, productsArr);
    renderSales(i, productsArr);
    renderAchievements(achievements, i, productsArr);
    renderCounters(salesArr, achievementsArr);
  })
}

themeLightBtnEl.addEventListener('click', changeToLightTheme);
themeDarkBtnEl.addEventListener('click', changeToDarkTheme);
resetBtnEl.addEventListener('click', resetAll)