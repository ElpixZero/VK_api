import View from '../View.js'

let results = document.querySelector('#results');
let data = [];

export default {
    setData(dataForSetting) {
      data = dataForSetting.items;
      console.log(data);
    },

    render() {
      results.innerHTML = View.render('videos', { list: data });
    }
}