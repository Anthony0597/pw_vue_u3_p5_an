import { createRouter, createWebHashHistory } from "vue-router"


import NoFoundPage from '@/pages/NoFoundPage'

const routes = [
    {
        path:'/actualizar',
        component:()=>import ('@/pages/EstudianteGuardar')
    },
    {
        path:'/eliminar',
        component:()=>import('@/pages/EstudianteEliminar')
    },
    {
        path:'/consultar/:id',
        component:()=>import('@/pages/EstudianteConsultar')
    },
    {
        path:'/guardar',
        component:()=>import('@/pages/EstudianteGuardar')
    },
    {
        path:'/:pathMatch(.*)*',
        component:NoFoundPage
    }
]

const router = createRouter({history: createWebHashHistory(), routes})

export default router