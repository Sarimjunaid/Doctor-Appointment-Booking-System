import jwt from 'jsonwebtoken';
import Doctor from '../models/DoctorSchema.js';
import User from '../models/UserSchema.js';

export const authenticate = (req, res, next) => {
    //check if the token is present in the header

    const authToken = req.headers.authorization
    //check if token is present
    if (!authToken || !authToken.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'NO token, authorization denied' });
    }
    try {
        const token = authToken.split(" ")[1];
        //verify token
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY )
        req.userId = decode.id;
        req.role = decode.role;
        next(); //must be call the next middleware or function
    } catch (err) {
        if(err.name === 'TokenExpiredError'){
            return res.status(401).json({ success: false, message: 'Token expired, authorization denied' });
        }
        return res.status(401).json({ success: false, message: 'invalid token, authorization denied' });
    }
};
    export const restrict = roles => async (req, res, next) => {
        const userId = req.userId;
        let user;

        const patient = await User.findById(userId);
        const doctor = await Doctor.findById(userId);
        if (patient) {
            user = patient;
        }
        if (doctor) {
            user = doctor;
        }
        if (!roles.includes(user.role)) {
            return res.status(401).json({ success: false, message: 'Forbidden: You do not have access to this resource' });
        }
        next();
}
