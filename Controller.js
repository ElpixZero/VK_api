import Model from './Model.js';
import Friends from './pages/friends.js';
import Friend from './pages/friend.js';
import News from './pages/news.js';
import Videos from './pages/videos.js';




export default {
  async friends(id) {
    if (id) {
      const friendData = await Model.getUser({user_ids: id, fields: 'photo_100,city,country,bdate' });

      Friend.setData(friendData);
      Friend.render();
    } else {
      const friendsData = await Model.getFriends({order: 'name', fields: 'photo_100,city,country,bdate' });

      Friends.setData(friendsData);
      Friends.render();
    }
  },

  async news() {
    const newsData = await Model.getNews({filters: 'post', count: '50' });

    News.setData(newsData);
    News.render();
  },

  async videos() {
    const videosData = await Model.getVideos({owner_id: '292393314', count: '10'});

    Videos.setData(videosData);
    Videos.render();
  }

};