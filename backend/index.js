import express from 'express'
import mongoose, { connect } from 'mongoose'
import cors from 'cors'
import routes from './routes/routes.js'


const app = express()
const port = process.env.PORT || 5000

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017', {dbName: "todos"})
        console.log('Connected Successfully....')
    } catch (error) {
        console.log(error)
    }
}

connectDB()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(routes)

app.listen(port, () => {
    console.log(`Your server is lestening at http://localhost:5000`)
})
