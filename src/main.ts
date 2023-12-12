import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//importing local styles
import '@/assets/styles/main.css'
import '@/assets/styles/colors.css'

//importing animations libraries
import 'aos/dist/aos.css';
import 'animate.css';

//@ts-ignore
import AOS from 'aos';
AOS.init()

createApp(App).use(store).use(router).mount('#app')
