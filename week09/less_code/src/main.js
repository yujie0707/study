import Vue from 'vue';
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import '@/style/index.css';

Vue.use(elementUI);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
