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
        component: () => import(/* webpackChunkName: "meet" */ '../views/MeetLisa.vue')
    },
    {
        path: '/professional-portraits',
        name: 'professional',
        component: () => import(/* webpackChunkName: "professional" */ '../views/ProfessionalPortraits.vue')
    },
    {
        path: '/event-photos',
        name: 'event',
        component: () => import(/* webpackChunkName: "event" */ '../views/EventPhotos.vue')
    },
    {
        path: '/social-photos',
        name: 'social',
        component: () => import(/* webpackChunkName: "social" */ '../views/SocialPhotos.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
    },
    {
        path: '/what-others-are-saying',
        name: 'saying',
        component: () => import(/* webpackChunkName: "saying" */ '../views/WhatOthersAreSaying.vue')
    },
    {
        path: '/rates',
        name: 'rates',
        component: () => import(/* webpackChunkName: "rates" */ '../views/Rates.vue')
    }
]

const router = new VueRouter({
	mode: 'history',
	routes,
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	},
})

export default router
