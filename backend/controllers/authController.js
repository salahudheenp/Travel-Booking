import User from "../models/User";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import * as dotenv from 'dotenv';
import { TopologyDescriptionChangedEvent } from "mongodb";

dotenv.config();


// user registration
export const register = async (req, res) => {
    try {
        const userData = req.body

        // hashing password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(userData.password, salt)


        const newUser = new User({
            username: userData.username,
            email: userData.email,
            password: hash
        })

        await newUser.save()
        res.status(200).json({
            success: true,
            message: 'successfully created'
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'failed to create. Try again',
        })
    }
}




// user login 
export const login = async (req, res) => {

    const email = req.body.email
    try {
        console.log(req.body, "login body");
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({ success: false, message: 'user not found' })
        }


        const checkPassword = await bcrypt.compare(req.body.password, user.password)

        if (!checkPassword) {
            return res.status(401).json({ success: false, message: 'Incorrect email or password' })

        }
        const { password, role, ...rest } = user._doc


        // create jwt token
        const token = jwt.sign({ id: user._id, role: user.role },
            ` ${process.env.JWT_SECRET_KEY}`, { expiresIn: '15d' })

        // set token in browser cookies
        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: token.expiresIn
        }).status(200).json({
            token,
            success: true,
            message: 'successfully login',
            data: { ...rest },
            role,
        })

    } catch (error) {
        res.status(500).json({
            success: false, message: 'failed to login'
        })
    }
}