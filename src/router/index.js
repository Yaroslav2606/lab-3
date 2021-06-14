import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateMenu from '../views/CreateMenu/CreateMenu.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/CreateMenu',
        name: 'CreateMenu',
        component: CreateMenu,
    },
]

const router = new VueRouter({
    routes,
})

export default router