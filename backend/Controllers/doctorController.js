import Doctor from '../models/DoctorSchema.js';
import Booking from '../models/BookingSchema.js';

export const updateDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json({ status: 'success', message: 'Doctor updated successfully', data: updatedDoctor });
    }
    catch (err) {
        res.status(500).json({ status: 'false', message: 'Failed to update doctor' });
    }
}
export const deleteDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        await Doctor.findByIdAndDelete(id);
        res.status(200).json({ status: 'success', message: 'Doctor deleted successfully' });
    }
    catch (err) {
        res.status(500).json({ status: 'false', message: 'Failed to delete doctor' });
    }
}
export const getSingleDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const doctor = await Doctor.findById(id).populate('reviews').select('-password');
        res.status(200).json({ status: 'true', message: 'Doctor found', data: doctor });
    }
    catch (err) {
        res.status(404).json({ status: 'false', message: 'No Doctor found' });
    }
}
export const getAllDoctor = async (req, res) => {
    const { query } = req.query;
    let doctors;

    if (query) {
        doctors = await Doctor.find({
            isApproved: "approved",
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { specialization: { $regex: query, $options: 'i' } }
            ]
        }).select('-password');
    }
    else {
        doctors = await Doctor.find({ isApproved: "approved" }).select('-password');
    }

    try {
        res.status(200).json({ status: 'true', message: 'Doctors found', data: doctors });
    }
    catch (err) {
        res.status(404).json({ status: 'false', message: 'Not found' });
    }
};

export const getDoctorProfile = async (req, res) => {
    const doctorId = req.userId;

    try {
        const doctor = await Doctor.findById(doctorId)
        if (!doctor) {
            return res.status(404).json({ status: 'false', message: 'Doctor not found' });
        }
        const { password, ...rest } = doctor._doc;
        const appointments = await Booking.find({ doctor: doctorId });
        res.status(200).json({ status: 'true', message: 'Profile info is retrieved successfully', data: { ...rest, appointments } });
    }
    catch (err) {
        res.status(500).json({ status: 'false', message: 'Failed to get user profile' });
    }
}
