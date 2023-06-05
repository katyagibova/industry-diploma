import Vue from 'vue'
import VueRouter from 'vue-router'
import MainScreen from '../views/MainScreen.vue'
import Equipments from '../views/Equipments.vue'
import StandartExcursion from '../components/StandartExcursion.vue'
import AdvancedExcursion from '../components/AdvancedExcursion.vue'
import EquipmentPage from '../components/EquipmentPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainScreen',
    component: MainScreen,
  },
  {
    path: '/',
    name: 'Equipments',
    component: Equipments,
    children: [
      {
        path: '/standart-excursion',
        name: 'StandartExcursion',
        component: StandartExcursion,
      },
      {
        path: '/advanced-excursion',
        name: 'AdvancedExcursion',
        component: AdvancedExcursion,
      },
      {
        path: '/standart-excursion/:equipmentId',
        name: 'EquipmentPage',
        component: EquipmentPage,
      },
      {
        path: '/advanced-excursion/:equipmentId',
        name: 'EquipmentPage',
        component: EquipmentPage,
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
