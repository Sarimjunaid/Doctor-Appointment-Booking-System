import User from '../models/UserSchema.js';
import Booking from '../models/BookingSchema.js';
import Doctor from '../models/DoctorSchema.js';

export const updateUser = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json({ status: 'success', message: 'User updated successfully', data: updatedUser });
    }
    catch (err) {
        res.status(500).json({ status: 'false', message: 'Failed to update user' });
    }
}
export const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({ status: 'success', message: 'User deleted successfully' });
    }
    catch (err) {
        res.status(500).json({ status: 'false', message: 'Failed to delete user' });
    } 
}
export const getSingleUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findById(id).select('-password');
        res.status(200).json({ status: 'true', message: 'User found', data: user });
    }
    catch (err) {
        res.status(404).json({ status: 'false', message: 'No user found' });
    } 
}
export const getAllUser = async (req, res) => {

    try {
        const users = await User.find({}).select('-password');
        res.status(200).json({ status: 'true', message: 'Users found', data: users });
    }
    catch (err) {
        res.status(404).json({ status: 'false', message: 'Not found' });
    } 
}

export const getUserProfile = async (req, res) => {
    const userId = req.userId;

    try {
        const user = await User.findById(userId)
        if(!user){
            return res.status(404).json({ status: 'false', message: 'User not found' });
        }
        const { password , ...rest } = user._doc;
        res.status(200).json({ status: 'true', message: 'Profile info is retrieved successfully', data: { ...rest} });
    }
    catch (err) {
        res.status(500).json({ status: 'false', message: 'Failed to get user profile' });
    }
};

export const getMyAppointments = async (req, res) => {
    try {
        
        //step-1 : retrieve appointments from booking for specific user
        const bookings = await Booking.find({ user: req.userId })
        //step-2 : extract doctorIds from appointment bookings
        const doctorIds = bookings.map(el => el.doctor)
        //step-3 : retrieve doctors using doctor Ids
        const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select('-password')
        res.status(200).json({ status: 'true', message: 'Appointments retrieved successfully', data:doctors  });
    } catch (error) {
        res.status(500).json({ status: 'false', message: 'Failed to get appointments' });
    }
}
    