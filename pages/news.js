import View from "../View.js";
import sortingMethods from '../sortingMethods.js';
import {setSortingValue, getSortingValue} from '../sortingSettings.js';



const results = document.querySelector('#results');
let data = [];
let sortingMethod = getSortingValue('news');
console.log(`firstly = ${sortingMethod}`);

export default {
  setData(dataForRender) {
    data = dataForRender.items;
  },

  setSorting(newSortingMethod) {
    setSortingValue('news', newSortingMethod);
    sortingMethod = getSortingValue('news');
  },

  render() {
    if (sortingMethod === 'time') {
      sortingMethods.byTime(data);
    } else if (sortingMethod === 'likes') {
      sortingMethods.byLikes(data);
    }


    results.innerHTML = View.render('news', { list: data });

    let sortingSelect = document.querySelector('[data-role=sortNews]');
    sortingSelect.value = sortingMethod;

    sortingSelect.addEventListener('change', (e) => {
      this.setSorting(e.target.value);
      this.render();
    });
  }
};