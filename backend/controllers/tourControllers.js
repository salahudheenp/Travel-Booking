
import Tour from '../models/Tour'


// create new tour

export const createTour = async (req, res) => {
    console.log(req.body);
    const newTour = new Tour(req.body)


    try {
        const savedTour = await newTour.save()

        res.status(200).json({ success: true, message: 'successfully created', data: savedTour })

    } catch (error) {
        res.status(500).json({ success: false, message: 'failed to create try agin' })

    }
}




// update tour

export const updateTour = async (req, res) => {

    const id = req.params.id
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id,
            {
                $set: req.body
            }, { new: true })

        res.status(200).json({ success: true, message: 'successfully updated', data: updatedTour })


    } catch (error) {
        res.status(500).json({ success: false, message: 'failed to updated' })

    }
}



// delete tour

export const deleteTour = async (req, res) => {
    const id = req.params.id

    try {
        await Tour.findByIdAndDelete(id)

        res.status(200).json({ success: true, message: 'successfully deleted', })

    } catch (error) {

        res.status(500).json({ success: false, message: 'failed to delete' })

    }
}



// get single tour details

export const getSingleTour = async (req, res) => {

    const id = req.params.id
    try {
        const singleTour = await Tour.findById(id).populate('reviews')

        res.status(200).json({ success: true, message: 'successfully get single tour details', data: singleTour })
    } catch (error) {
        res.status(404).json({ success: false, message: 'note found' })

    }
}





// get all tour

export const getAllTour = async (req, res) => {

    // for pagination
    const page = parseInt(req.query.page)

    try {
        const tours = await Tour.find({}).populate('reviews').skip(page * 8).limit(8)

        res.status(200).json({ success: true, message: 'successfully get tours', count: tours.length, data: tours })

    } catch (error) {
        res.status(404).json({ success: false, message: 'note found' })

    }
}




// get tour by search

export const getTourBySearch = async (req, res) => {
    const city = new RegExp(req.query.city, 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)
    console.log(city, distance, maxGroupSize, '909090');

    try {

        const tours = await Tour.find({
            city,
            distance: { $gte: distance },
            maxGroupSize: {
                $gte: maxGroupSize
            }
        }).populate('reviews')

        res.status(200).json({ success: true, message: 'successful', data: tours })

    } catch (error) {

        res.status(404).json({ success: false, message: 'note found' })

    }
}



// get featured tour

export const getFeaturedTour = async (req, res) => {



    try {
        const tours = await Tour.find({ featured: true }).populate('reviews').limit(8)

        res.status(200).json({ success: true, message: 'successful', data: tours })

    } catch (error) {
        res.status(404).json({ success: false, message: 'note found' })

    }
}



// get tour count

export const getTourCount = async (req, res) => {
    try {
        const count = await Tour.estimatedDocumentCount()

        res.status(200).json({ success: true, data: count })

    } catch (error) {

        res.status(500).json({ success: false, message: 'failed to fetch' })

    }
}
