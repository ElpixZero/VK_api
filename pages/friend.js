import View from "../View.js";

const results = document.querySelector('#results');
let data = {};

export default {
  setData(dataForRender) {
    data = dataForRender[0];
  },

  render() {
    results.innerHTML = View.render('friend', data);
  }
};