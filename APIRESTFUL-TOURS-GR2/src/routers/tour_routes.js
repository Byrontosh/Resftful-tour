import {Router} from 'express'
import { createTourController, deleteTourController, getAlltourControllerByID, getAllToursControllers, updateTourController } from '../controllers/tour_controller.js'
const router = Router()



router.get('/tours',getAllToursControllers)
router.get('/tours/:id',getAlltourControllerByID)
router.post('/tours',createTourController)
router.put('/tours/:id',updateTourController)
router.delete('/tours/:id',deleteTourController)



export default router