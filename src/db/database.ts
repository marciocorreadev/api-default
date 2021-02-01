import mongoose from 'mongoose'
import config from '@config'

function connectDB() {
    if (config.db.connectionString) {
        mongoose.connect(
            config.db.connectionString,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false,
            })
    }
}

export default connectDB 