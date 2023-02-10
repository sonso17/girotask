import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import RegistreRegistre from '../views/RegistreRegistre.vue'
import LogIn from '../views/LogIn.vue'
import LlistaUsuaris from '../views/LlistaUsuaris.vue'
import CrearTasca from '../views/CrearTasca.vue'
import VeureTasca from '../views/VeureTasca.vue'
import LlistaTasques from '../views/LlistaTasques.vue'
import ModificarTasca from '../views/ModificarTasca.vue'
import ModificarUsuari from '../views/ModificarUsuari'
//aixo son les rutes que les tinc a mitjes també pero ja van bé
const routes = [
  {
    path: '/',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/registrar',
    name: 'RegistreRegistre',
    component: RegistreRegistre
  },
  {
    path: '/LlistaTasques',
    name: 'LlistaTasques',
    component: LlistaTasques
  },
  {
    path: '/llistaUsuaris',
    name: 'llistaUsuaris',
    component: LlistaUsuaris
  },
  {
    path: '/crearTasca',
    name: 'crearTasca',
    component: CrearTasca
  },
  {
    path: '/veureTasca',
    name: 'veureTasca',
    component: VeureTasca
  },
  {
    path: '/modificarTasca',
    name: 'modificarTasca',
    component: ModificarTasca
  },
  {
    path: '/modificarUsuari',
    name: 'modificarUsuari',
    component: ModificarUsuari
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
