import Mongoose from "mongoose";

const modelSchema = new Mongoose.Schema(
    {
        name: { type: String, required: true },
        img: { type: String, default: '' },
        price: { type: Number, default: 1 },
    },
    {
        timestamps: true
    }
)

export default Mongoose.models.Pet || Mongoose.model('Pet', modelSchema)