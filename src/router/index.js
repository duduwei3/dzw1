import Vue from 'vue'
import VueRouter from 'vue-router'
import ControlPanel from '../components/Control-Panel.vue'
import Home from '../components/Home.vue'
import Add from '../components/Add.vue'
import Send from '../components/add/Send.vue'
import Pickup from '../components/add/Pickup.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/home' },
    {
        path: '/controlPanel',
        component: ControlPanel,
        redirect: '/home',
        children: [
            { path: '/home', component: Home },
            {
                path: '/add',
                component: Add,
                redirect: '/send',
                children: [
                    { path: '/send', component: Send },
                    { path: '/pickup', component: Pickup }
                ]
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router