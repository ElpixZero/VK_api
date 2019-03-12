
export function getSortingValue(paramOfSorting) {
  console.log(`paramingetSortingValue = ${paramOfSorting}`);


  if (paramOfSorting === 'news') { 
    return localStorage.newsSortingValue || 'time';
  } else if (paramOfSorting === 'friends') {
    return localStorage.friendsSortingValue || 'name';
  }
}

export function setSortingValue(paramOfSorting, sortingValue) {
  console.log(`paraminsetSortingValue = ${paramOfSorting}`);
  if (paramOfSorting === 'news' ) {
    localStorage.newsSortingValue = sortingValue;
  } else if (paramOfSorting === 'friends') {
    localStorage.friendsSortingValue = sortingValue;
  }
}