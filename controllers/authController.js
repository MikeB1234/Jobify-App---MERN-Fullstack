import { nextTick } from 'process'
import User from '../models/User.js'

const register = async (req, res, next) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json({ user })
    } catch (error) {
        next(error)
    }
}

const login = (req, res) => {
    res.send('Login user')
}
const updateUser = (req, res) => {
    res.send('Update user')
}

export { register, login, updateUser }