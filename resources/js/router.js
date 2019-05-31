import Vue from "vue"
import VueRouter from "vue-router"
import IndexPage from "./components/Index.vue"
import SajiPage from "./components/pages/saji.vue"
import MoliPage from "./components/pages/moli.vue"
import ZiziPage from "./components/pages/zizi.vue"
import KaziPage from "./components/pages/kazi.vue"

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/saji',
            name: 'saji',
            component: SajiPage
        },
        {
            path: '/moli',
            name: 'moli',
            component: MoliPage
        },
        {
            path: '/zizi',
            name: 'zizi',
            component: ZiziPage
        },
        {
            path: '/kazi',
            name: 'kazi',
            component: KaziPage
        }
    ]
})