import Model from './Model.js';
import View from './View.js';
import Router from './Router.js';

Handlebars.registerHelper('formatBirthDay', bdate => {
  const months = [
    'января', 'февраля', 'марта',
    'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября',
    'октября', 'ноября', 'декабря'
  ];

  const [day, month] = bdate.split('.'); 

  return [day, months[month-1]].join(' ');
});

Handlebars.registerHelper('formateNewsDate', date => {
  return new Date(date*1000).toLocaleString();
});



(async () => {
  try {
    const header = document.getElementById('header');
    await Model.login(6850895, 2 | 8192 | 16);
    const [me] = await Model.getUser({ name_case: 'gen' });
    header.innerHTML = View.render('header', me);

    Router.init();
  }
  catch(e) {
    console.log(e);
    alert('Ошибка: ' + e.message);
  }
})();