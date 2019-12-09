import express from 'express'
const router = express.Router()

import inversionController from '../controllers/inversionController'
    
    // Envia monto aleatorio
    router.get('/monto',(req,res)=>{
        // max y min expresado en miles
        const max = 100
        const min = 5
        const resultado = (Math.floor(Math.random() * (max - min)) + min) * 1000
        res.send(`${resultado}`)
    })


    // Agrega nueva inversion via POST
    router.post('/inversion',
        inversionController.nuevaInversion
    )

    // Obtener todas las inversion
    router.get('/inversion', 
        inversionController.mostrarInversiones
    )

    // Muestra una inversion en especifico (ID)
    router.get('/inversion/:id', 
        inversionController.mostrarInversion 
    )

    // Actualizar Inversion
    router.put('/inversion/:id', 
        inversionController.actualizarInversion
    )

    // Eliminar Inversion
    router.delete('/inversion/:id', 
        inversionController.eliminarInversion
    )

export default router

