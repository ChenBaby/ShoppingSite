import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Poker from '@/components/Luckypoker'

Vue.use(Router)

export default new Router({
    "mode": 'history',
    "routes": [
        {
            "path": '/',
            "name": 'Home',
            "component": Home
        },
        {
            "path": '/luckypoker',
            "name": 'Poker',
            "component": Poker
        }
    ]
})
