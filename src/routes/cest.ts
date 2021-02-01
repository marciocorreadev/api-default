import { Router } from 'express'
import AnyValueController from '@controllers/anyValue'

const router = Router()
router.get('/anyValue', AnyValueController.get)
router.get('/anyValue/:anyValue', AnyValueController.getById)
router.get('/anyValue/ncm/:ncm', AnyValueController.getByNcm)
router.post('/anyValue', AnyValueController.create)
router.put('/anyValue/:anyValue', AnyValueController.update)
router.delete('/anyValue/:anyValue', AnyValueController.remove)

export default router