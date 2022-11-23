import Vue from 'vue';
import MineSweeperVue from './views/MineSweeper.vue';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(MineSweeperVue),
}).$mount('#app');
