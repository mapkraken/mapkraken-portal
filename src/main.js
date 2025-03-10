import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import router from './router'; // Import the router from the new index.js file

// Import BootstrapVue and Bootstrap's CSS
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import { BootstrapVue3 } from 'bootstrap-vue-3';

// Add FontAwesome icons to the library
library.add(faGithub, faLinkedinIn, faEnvelope);

const app = createApp(App);

// Use BootstrapVue and IconsPlugin
app.use(BootstrapVue3);

// Use ElementPlus and router
app.use(ElementPlus);
app.use(router);

// Register FontAwesomeIcon globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Mount the app to the DOM
app.mount('#app');
