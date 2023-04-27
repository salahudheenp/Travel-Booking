import Review from "../models/Review";
import Tour from "../models/Tour";


export const createReview = async (req, res) => {

    const tourId = req.params.id
    const newReview = new Review({ ...req.body })

    try {

        const savedReview = newReview.save()

        await Tour.findByIdAndUpdate(tourId, {
            $push: { reviews: savedReview._id }
        })
        res.status(200).json({ success: true, message: 'Review submitted', data: savedReview })
    } catch (error) {
        res.status(500).json({ success: false, message: 'failed to submit' })

    }
}