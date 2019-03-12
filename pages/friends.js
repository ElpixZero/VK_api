import View from "../View.js";
import sortingMethod from "../sortingMethods.js";
import {getSortingValue, setSortingValue} from "../sortingSettings.js";


const results = document.querySelector('#results');
let data = [];
let sortMethod = getSortingValue('friends');

export default {
  setData(dataForRender) {
    data = dataForRender.items;
  },

  setSorting(newSortMethod) {
    setSortingValue('friends', newSortMethod);
    sortMethod = getSortingValue('friends');
  },

  render() {
    if (sortMethod === 'name') { 
      sortingMethod.byName(data);
    } else {
      sortingMethod.byBDay(data);
    }

    results.innerHTML = View.render('friends', { list: data });

    const sort = results.querySelector('[data-role=sortFriends]');

    sort.value = sortMethod;

    sort.addEventListener('change', e => {
      this.setSorting(e.target.value);
      this.render();
    });
  }
};