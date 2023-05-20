//defining schema
import mongoose from "mongoose";

const FlightSchema = new mongoose.Schema({

    source: {
        type: String,
    },

    destination: {
        type: String,
    },

    indigo: {
        type: String

    },
    airAsia: {
        type: String

    },
    vistara: {
        type: String

    },
 

});

const FlightModel = mongoose.model('Item',FlightSchema );
export default FlightModel;

