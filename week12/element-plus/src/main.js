import { createApp } from 'vue';
import VInfiniteScroll from './components/InfiniteScroll/index';
import App from './App.vue';

// Vue.use(VInfiniteScroll);
const app = createApp(App);
app.use(VInfiniteScroll);
app.mount('#app');
