import Vue from "vue"
import VueRouter from "vue-router"
import IndexPage from "./containers/Index.vue"
import SajiPage from "./containers/pages/saji.vue"
import MoliPage from "./containers/pages/moli.vue"
import ZiziPage from "./containers/pages/zizi.vue"
import KaziPage from "./containers/pages/kazi.vue"

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