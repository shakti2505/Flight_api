import FlightModel from '../models/product.js';

class FlightController {

    static readFlight = async (req, res) => {
        try {
            const flight = await FlightModel.find()
            res.send(flight)
        } catch (error) {
            console.log(error)
        }

    }

    static flightBySrcDes = async (req, res) => {

        const data = await FlightModel.find({

            "$or": [
                { "source": { $regex: req.params.id } },
                { "destination": { $regex: req.params.id } }
            ]
        })
        res.send(data);

    }


}

export default FlightController;