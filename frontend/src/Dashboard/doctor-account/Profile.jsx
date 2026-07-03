import { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import uploadImageToCloudinary from '../../utils/uploadCloudinary'
import { BASE_URL, token } from '../../config'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

const Profile = ({ doctorData }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        bio: '',
        gender: '',
        specialization: '',
        ticketPrice: null,
        qualifications: [],
        experiences: [],
        timeSlots: [{ day: '', startingTime: '', endingTime: '' }],
        about: '',
        photo: null
    })

    useEffect(() => {
        setFormData({
            name: doctorData?.name,
            email: doctorData?.email,
            password: doctorData?.password,
            phone: doctorData?.phone,
            bio: doctorData?.bio,
            gender: doctorData?.gender,
            specialization: doctorData?.specialization,
            ticketPrice: doctorData?.ticketPrice,
            qualifications: doctorData?.qualifications,
            experiences: doctorData?.experiences,
            timeSlots: doctorData?.timeSlots,
            about: doctorData?.about,
            photo: doctorData?.photo
        })
    }, [doctorData])

    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleFileInputChange = async event => {
        const file = event.target.files[0];
        const data = await uploadImageToCloudinary(file);
        setFormData({ ...formData, photo: data?.url });
    }
    const updateProfileHandler = async e => {
        e.preventDefault();

        try {
            const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            })
            const reult = await res.json();
            if (!res.ok) {
                throw Error(reult.message)
            }
            toast.success(reult.message)
        }
        catch (err) {
            toast.error(err.message);
        }
    }
    //reusable function for adding items
    const addItem = (key, item) => {
        setFormData(prevFormData => ({ ...prevFormData, [key]: [...prevFormData[key], item] }))
    }
    //reusable input change function
    const handleReusableInputChangeFunc = (key, event, index) => {
        const { name, value } = event.target;
        setFormData(prevFormData => {
            const updatedItems = [...prevFormData[key]];
            updatedItems[index][name] = value;
            return { ...prevFormData, [key]: updatedItems };

        })
    }
    //reusable function for deleting items
    const deleteItem = (key, index) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [key]: prevFormData[key].filter((_, i) => i !== index)
        }));
    }

    const addQualification = e => {
        e.preventDefault();
        addItem('qualifications',
            { startingDate: '', endingDate: '', degree: '', university: '' })
    }
    const handleQualificationChange = (event, index) => {
        handleReusableInputChangeFunc('qualifications', event, index)
    }
    const deleteQualification = (event, index) => {
        e.preventDefault();
        deleteItem('qualifications', index)
    }

    const addExperience = e => {
        e.preventDefault();
        addItem('experiences',
            { startingDate: '', endingDate: '', position: '', hospital: '' })
    }
    const handleExperienceChange = (event, index) => {
        handleReusableInputChangeFunc('experiences', event, index)
    }
    const deleteExperience = (event, index) => {
        e.preventDefault();
        deleteItem('experiences', index)
    }

    const addTimeSlot = e => {
        e.preventDefault();
        addItem('timeSlots',
            { day: '', startingTime: '', endingTime: '' })
    }
    const handleTimeSlotChange = (event, index) => {
        handleReusableInputChangeFunc('timeSlots', event, index)
    }
    const deleteTimeSlot = (event, index) => {
        e.preventDefault();
        deleteItem('timeSlots', index)
    }

    return (
        <div>
            <h2 className='text-[#181A1E] font-bold text-[24px] leading-9 mb-10 '>
                Profile Information
            </h2>
            <form action="">
                <div className='mb-5'>
                    <p className='form__label'>Name*</p>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange}
                        placeholder='Full Name' className=' form__input p-2 rounded ' />
                </div>
                <div className='mb-5'>
                    <p className='form__label'>Email*</p>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange}
                        placeholder='Email' className=' form__input p-2 rounded ' readOnly aria-readonly disabled='true' />
                </div>
                <div className='mb-5'>
                    <p className='form__label'>Phone*</p>
                    <input type="number" name="phone" value={formData.phone} onChange={handleInputChange}
                        placeholder='Phone number' className=' form__input p-2 rounded ' />
                </div>
                <div className='mb-5'>
                    <p className='form__label'>Bio*</p>
                    <input type="text" name="bio" value={formData.bio} onChange={handleInputChange}
                        placeholder='Bio' className=' form__input p-2 rounded ' maxLength={100} />
                </div>
                <div className="mb-5">
                    <div className="grid grid-cols-3 gap-5 mb-[30px] ">
                        <div>
                            <p className='form__label'>Gender*</p>
                            <select name="gender" value={formData.gender} onChange={handleInputChange} className='form__input py-3.5' id="">
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <p className='form__label'>Specialization*</p>
                            <select name="specialization" value={formData.specialization} onChange={handleInputChange} className='form__input py-3.5' id="">
                                <option value="">Select Specialization</option>
                                <option value="cardiology">Cardiology</option>
                                <option value="neurology">Neurology</option>
                                <option value="pediatrics">Pediatrics</option>
                            </select>
                        </div>
                        <div>
                            <p className='form__label'>Ticket Price*</p>
                            <input type="number" placeholder='100' name='ticketPrice' value={formData.ticketPrice} onChange={handleInputChange} className='form__input p-3' />
                        </div>
                    </div>
                </div>

                <div className="mb-5">
                    <p className='form__label'>Experiences*</p>
                    {formData.experiences.map((item, index) => (
                        <div key={index} >
                            <div>
                                <div className='grid grid-cols-2 gap-5'>
                                    <div>
                                        <p className='form__label'>Starting Date*</p>
                                        <input type="date" name="startingDate" value={item.startingDate} onChange={(e) => handleExperienceChange(e, index)} className='form__input p-2' id="" />
                                    </div>
                                    <div>
                                        <p className='form__label'>Ending Date*</p>
                                        <input type="date" name="endingDate" value={item.endingDate} onChange={(e) => handleExperienceChange(e, index)} className='form__input p-2' id="" />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-5 mt-5'>
                                    <div>
                                        <p className='form__label'>Position*</p>
                                        <input type="text" name="position" value={item.position} onChange={(e) => handleExperienceChange(e, index)} className='form__input p-2' id="" />
                                    </div>
                                    <div>
                                        <p className='form__label'>Hospital*</p>
                                        <input type="text" name="hospital" value={item.hospital} onChange={(e) => handleExperienceChange(e, index)} className='form__input p-2' id="" />
                                    </div>
                                </div>
                                <button onClick={(e) => deleteExperience(e, index)} className='bg-red-600 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer '><AiOutlineDelete /></button>
                            </div>
                        </div>
                    ))}
                    <button onClick={addExperience} className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer '>Add Experience</button>
                </div>
                <div className="mb-5">
                    <p className='form__label'>Qualifications*</p>
                    {formData.qualifications.map((item, index) => (
                        <div key={index} >
                            <div>
                                <div className='grid grid-cols-2 gap-5'>
                                    <div>
                                        <p className='form__label'>Starting Date*</p>
                                        <input type="date" name="startingDate" value={item.startingDate} onChange={e => handleReusableInputChangeFunc('qualifications', e, index)} className='form__input p-2' id="" />
                                    </div>
                                    <div>
                                        <p className='form__label'>Ending Date*</p>
                                        <input type="date" name="endingDate" value={item.endingDate} onChange={e => handleReusableInputChangeFunc('qualifications', e, index)} className='form__input p-2' id="" />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-5 mt-5'>
                                    <div>
                                        <p className='form__label'>Degree*</p>
                                        <input type="text" name="degree" value={item.degree} onChange={e => handleReusableInputChangeFunc('qualifications', e, index)} className='form__input p-2' id="" />
                                    </div>
                                    <div>
                                        <p className='form__label'>University*</p>
                                        <input type="text" name="university" value={item.university} onChange={e => handleReusableInputChangeFunc('qualifications', e, index)} className='form__input p-2' id="" />
                                    </div>
                                </div>
                                <button onClick={(e) => deleteQualification(e, index)} className='bg-red-600 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer '><AiOutlineDelete /></button>
                            </div>
                        </div>
                    ))}
                    <button onClick={addQualification} className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer '>Add Qualification</button>
                </div>
                <div className="mb-5">
                    <p className='form__label'>Time Slots *</p>
                    {formData.timeSlots.map((item, index) => (
                        <div key={index} >
                            <div>
                                <div className='grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5'>
                                    <div>
                                        <p className='form__label'>Day*</p>
                                        <select name="day" value={item.day} onChange={e => handleTimeSlotChange(e, index)} className='form__input py-3.5' id="">
                                            <option value="">Select Day</option>
                                            <option value="Monday">Monday</option>
                                            <option value="Tuesday">Tuesday</option>
                                            <option value="Wednesday">Wednesday</option>
                                            <option value="Thursday">Thursday</option>
                                            <option value="Friday">Friday</option>
                                            <option value="Saturday">Saturday</option>
                                            <option value="Sunday">Sunday</option>
                                        </select>
                                    </div>
                                    <div>
                                        <p className='form__label'>Starting Time *</p>
                                        <input type="time" name="startingTime" value={item.startingTime} onChange={e => handleTimeSlotChange(e, index)} className='form__input p-2' id="" />
                                    </div>
                                    <div>
                                        <p className='form__label'>Ending Time *</p>
                                        <input type="time" name="endingTime" value={item.endingTime} onChange={e => handleTimeSlotChange(e, index)} className='form__input p-2' id="" />
                                    </div>
                                    <div onClick={e => deleteTimeSlot(e, index)} className='flex items-center'>
                                        <button className='bg-red-600 rounded-full text-white text-[18px] mt-6 cursor-pointer '><AiOutlineDelete /></button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    ))}
                    <button onClick={addTimeSlot} className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer '>Add Time Slot</button>
                </div>
                <div className="mb-5">
                    <p className='form__label'>About</p>
                    <textarea name="about" value={formData.about} placeholder='Write about you' onChange={handleInputChange} className='form__input ' rows={5} />
                </div>
                <div className="mb-5 items-center gap-3">
                    {formData.photo && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-[#0066ff61] flex items-center justify-center '>
                        <img className='w-full rounded-full  ' src={formData.photo} alt="" />
                    </figure>}
                    <div className='relative w-[130px] h-[50px] '>
                        <input type="file" name='photo' id='customFile' accept='.jpg , .png' onChange={handleFileInputChange}
                            className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                        />
                        <label htmlFor="customFile"
                            className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-[#181A1E] font-semibold rounded-lg truncate cursor-pointer '
                        >Upload Photo
                        </label>
                    </div>
                </div>
                <div className="mt-7">
                    <button type="submit" onClick={updateProfileHandler} className='bg-[#0067FF] text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg cursor-pointer '>
                        Update Profile
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Profile
