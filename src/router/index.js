import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/meet-lisa',
        name: 'meet',
        component: () => import(/* webpackChunkName: "meet" */ '../views/Meet.vue')
    },
    {
        path: '/corporate-photography',
        name: 'corporate',
        component: () => import(/* webpackChunkName: "corporate" */ '../views/Corporate.vue')
    },
    {
        path: '/event-photography',
        name: 'event',
        component: () => import(/* webpackChunkName: "event" */ '../views/Event.vue')
    },
    {
        path: '/lifestyle-photography',
        name: 'lifestyle',
        component: () => import(/* webpackChunkName: "lifestyle" */ '../views/Lifestyle.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
