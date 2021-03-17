import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'honme',
        component: () =>
            import ('@/views/home')
    },
    {
        path: '/search',
        name: 'search',
        component: () =>
            import ('@/views/search')
    }
]

const router = new VueRouter({
    routes
})

export default router