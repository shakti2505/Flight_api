import express from 'express';
import FlightController from '../controllers/products.js'

const router = express.Router();

router.get('/', FlightController.readFlight)
router.get('/:id', FlightController.flightBySrcDes)


export default router;