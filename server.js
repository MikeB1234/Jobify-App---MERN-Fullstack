import express from 'express'
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import dotenv from 'dotenv'
import 'express-async-errors'
import morgan from 'morgan'
import connectDB from './db/connect.js'
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'

dotenv.config()
const app = express()

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}

app.use(express.json())
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

app.get('/api/v1', (req, res) => {
    res.json({ msg: 'Welcome' })
})

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    } catch (err) {
        console.log(err)
    }
}
start()
