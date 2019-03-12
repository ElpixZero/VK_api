import Controller from './Controller.js'

function getRouteInfo() {
  const hash = location.hash ? location.hash.slice(1) : '';
  const [name, id] = hash.split('/');

  return { name, id };
};

function handleHash() {
  const {name, id} = getRouteInfo();

  if (name) {
    Controller[name](id);
  }
};

export default {
  init() {
    addEventListener('hashchange', handleHash);
    handleHash();
  }
}