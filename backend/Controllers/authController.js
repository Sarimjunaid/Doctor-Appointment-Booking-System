import User from '../models/UserSchema.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Doctor from '../models/DoctorSchema.js';


const generateToken = user => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: '15d' });
}
export const register = async (req, res) => {
    const { name, email, password, role, photo, gender } = req.body;
    try {
        let user = null

        if (role === 'doctor') {
            user = await User.findOne({ email });
        }
        else if (role === 'patient') {
            user = await User.findOne({ email });
        }
        //check if user already exists
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        //create new user
        if (role === 'patient') {
        user = new User({
            name,
            email,
            password: hashedPassword,
            role,
            photo,
            gender
        });
        await user.save();
        return res.status(201).json({ message: 'User registered successfully' })
    }
        if (role === 'doctor') {
        user = new Doctor({
            name,
            email,
            password: hashedPassword,
            role,
            photo,
            gender
        });
        await user.save();
        res.status(200).json({ success: true, message: 'User registered successfully' })
    }
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
}
export const login = async (req, res) => {
    const { email} = req.body;
    try {
        let user = null
        const patient = await User.findOne({ email });
        const doctor = await Doctor.findOne({ email });

        if (patient) {
            user = patient;
        }
        else if (doctor) {
            user = doctor;
        }
        //check if user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // compare password
        const isPasswordMatch = await bcrypt.compare( req.body.password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        //generate token
        const token = generateToken(user);

        const { password, role, appointments, ...rest } = user._doc;
        res.status(200).json({ status: 'success', message: 'Login successful', token, role, data:{ ...rest} });
    }
    catch (error) {
        return res.status(500).json({ status: false,  message: 'failed to login' });
    }
}