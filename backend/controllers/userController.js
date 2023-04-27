
import User from "../models/User"


// create new User

export const createUser = async (req, res) => {

    const newUser = new User(req.body)

    try {
        const savedUser = await newUser.save()

        res.status(200).json({ success: true, message: 'successfully created', data: savedUser })

    } catch (error) {
        res.status(500).json({ success: false, message: 'failed to create try agin' })

    }
}




// update User

export const updateUser = async (req, res) => {

    const id = req.params.id
    try {
        const updatedUser = await User.findByIdAndUpdate(id,
            {
                $set: req.body
            }, { new: true })

        res.status(200).json({ success: true, message: 'successfully updated', data: updatedUser })


    } catch (error) {
        res.status(500).json({ success: false, message: 'failed to updated' })

    }
}



// delete User

export const deleteUser = async (req, res) => {
    const id = req.params.id

    try {
        await User.findByIdAndDelete(id)

        res.status(200).json({ success: true, message: 'successfully deleted', })

    } catch (error) {

        res.status(500).json({ success: false, message: 'failed to delete' })

    }
}



// get single User details

export const getSingleUser = async (req, res) => {

    const id = req.params.id
    try {
        const singleUser = await User.findById(id)

        res.status(200).json({ success: true, message: 'successfully get single User details', data: singleUser })
    } catch (error) {
        res.status(404).json({ success: false, message: 'note found' })

    }
}





// get all User

export const getAllUser = async (req, res) => {


    try {
        const users = await User.find({})

        res.status(200).json({ success: true, message: 'successfully get Users', data: users })

    } catch (error) {
        res.status(404).json({ success: false, message: 'note found' })

    }
}
