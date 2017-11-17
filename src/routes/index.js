import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Portfolio from '../components/Portfolio.vue'
import Services from '../components/Services.vue'

Vue.use(Router);

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/portfolio', name: 'Portfolio', component: Portfolio },
    { path: '/services', name: 'Services', component: Services }
];;

export default new Router({
    mode: 'history', // prevents the # in the url
    routes
});