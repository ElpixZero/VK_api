function getNameForCompare(friend) {
  let name = '';

  if (friend.first_name) {
    name += friend.first_name;
  }

  if (friend.last_name) {
    name += friend.last_name;
  }

  return name;
};

function getBDayForCompare(friendBDate) {
  const [day, month] = friendBDate.split('.');
  const date = new Date();

  date.setMonth(month-1);
  date.setDate(day);

  return date;
}


export default {
  byName(dataBeforeSorting) {
    return dataBeforeSorting.sort( (a,b) => {
      const aName = getNameForCompare(a);
      const bName = getNameForCompare(b);
      
      return aName.localeCompare(bName);
    }); 
  },

  byBDay(dataBeforeSorting) {
    return dataBeforeSorting.sort( (a,b) => {
      if (!a.bdate) {
        return 1;
      } else if (!b.bdate) {
        return -1;
      }

      const aBDate = getBDayForCompare(a.bdate);
      const bBDate = getBDayForCompare(b.bdate);

      return aBDate - bBDate;
    });
  },

  byTime(dataBeforeSorting) {
    return dataBeforeSorting.sort( (a,b) => {
      const aDate = a.date;
      const bDate = b.date;

      return bDate - aDate;
    });
  },

  byLikes(dataBeforeSorting) {
   return dataBeforeSorting.sort( (a,b) => {
    const aLikes = a.likes.count;
    const bLikes = b.likes.count;
    
    return bLikes - aLikes;
   });
  },

}