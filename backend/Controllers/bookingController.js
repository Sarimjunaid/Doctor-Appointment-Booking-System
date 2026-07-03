import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import Booking from '../models/BookingSchema.js'
import Stripe from 'stripe'

export const getCheckoutSession = async(req,res) =>{
    try{
    
    //get currently booked doctor
    const doctor = await Doctor.findById(req.params.doctorId)
    const user = await User.findById(req.userId)
    
    // log incoming ids for debugging
    console.log('getCheckoutSession called', { userId: req.userId, doctorId: req.params.doctorId })

    // reject if the requester is not a patient
    if (req.role && req.role !== 'patient') {
        console.log('requester role is not patient:', req.role)
        return res.status(403).json({ success: false, message: 'Only patients can create bookings. Please login as a patient.' })
    }

    if (!doctor) {
        return res.status(404).json({ success: false, message: 'Doctor not found' })
    }
    if (!user) {
        console.log('user not found for id', req.userId)
        return res.status(404).json({ success: false, message: 'User not found' })
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

    // make sure CLIENT_SITE_URL has no trailing slash
    const clientUrl = (process.env.CLIENT_SITE_URL || '').replace(/\/$/, '')
    const successUrl = `${clientUrl}/checkout-success?session_id={CHECKOUT_SESSION_ID}`
    console.log('Stripe success_url:', successUrl)

    //create stripe checkout session
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode:'payment',
        success_url: successUrl,
        cancel_url:`${req.protocol}://${req.get('host')}/doctors/${doctor._id}`,
        customer_email:user.email,
        client_reference_id:req.params.doctorId,
        line_items:[
            {
                price_data:{
                    currency:'bdt',
                    unit_amount:doctor.ticketPrice * 100,
                    product_data:{
                        name:doctor.name,
                        description:doctor.bio,
                        images:[doctor.photo.replace(/^http:/, 'https:')]
                    }
                },
                quantity:1
            }
        ]
    })

    //create new booking
    const booking = new Booking({
        doctor:doctor._id,
        user:user._id,
        ticketPrice:doctor.ticketPrice,
        session:session.id
    })
    await booking.save()

    res.status(200).json({success:true,message:'Successfully paid', session })
} catch(err){
    console.error(err);
    res
    .status(500)
    .json({success:false, message: " Error creating checkout sesssion "});
}
}