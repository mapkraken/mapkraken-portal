import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'; // Import the router from the new index.js file
library.add(faGithub, faLinkedinIn, faEnvelope);

const app = createApp(App);
app.use(router)
app.use(ElementPlus)
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');