import mongoose, { Document, Schema } from 'mongoose'
import ICest from '@models/anyValue'

type Cest = Document & ICest;

const CestSchema = new Schema(
    {
        anyValue: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.model<Cest>('anyValue', CestSchema)