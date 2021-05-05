import Vue from 'vue';

import App from './App.vue';

import './styles/style.css';

Vue.config.devtools = process.env.NODE_ENV !== 'production';

new Vue({
  render: (h) => h(App)
}).$mount('#app');
