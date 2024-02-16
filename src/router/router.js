import { createRouter, createWebHashHistory } from "vue-router"

import EstudianteActualizar from '@/pages/EstudianteActualizar'
import EstudianteEliminar from '@/pages/EstudianteEliminar'
import EstudianteConsultar from '@/pages/EstudianteConsultar'
import EstudianteGuardar from '@/pages/EstudianteGuardar'

const routes = [
    {
        path:'/actualizar',
        component:EstudianteActualizar
    },
    {
        path:'/eliminar',
        component:EstudianteEliminar
    },
    {
        path:'/consultar',
        component:EstudianteConsultar
    },
    {
        path:'/guardar',
        component:EstudianteGuardar
    }
]

const router = createRouter({history: createWebHashHistory(), routes})

export default router