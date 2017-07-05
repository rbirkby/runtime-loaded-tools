import dependency from './lib/dependency';
import Vue from 'vue';
import App from './App.vue';

Vue.component('App', App);

console.info('Alerts tool dynamically loaded');

export function render(container) {
  container.innerHTML = "<div id='vueContainer'></div>";

  new Vue({
    el: '#vueContainer',
    template: '<App/>'
  });
}
