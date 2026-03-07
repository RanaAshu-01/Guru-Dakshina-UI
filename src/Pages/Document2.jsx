import { useState } from "react";
import Navbar from "../components/Navbar";
import StepProgress from "../components/StepProgress";
import { useNavigate } from 'react-router-dom';

const Document2 = () => {

    const [employedStatus, setEmployedStatus] = useState(false)

    const [formData, setFormData] = useState({
        fullName: "",
        appointmentDate: "",
        dob: "",
        pan: "",
        aadhaar: "",
        aadhaarOtp: "",
        udise: "",
        schoolName: "",
        district: "",
        constituency: "",
        block: "",
        cluster: "",
        institution: "",
        mobile: "",
        serialUdise: "",
        email: "",
    });

    const [errors, setErrors] = useState({})

    const [checked, setChecked] = useState(false)

    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {

        let newErrors = {};

        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newErrors[key] = true;
            }
        });

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {

        const valid = validateForm();

        if (!valid) return;

        setTimeout(() => {
            navigate("/education qualification");
        }, 1500);



    };

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-100 flex justify-center px-4 py-10">

                <div className="bg-white w-full max-w-7xl shadow-lg rounded px-10 py-8">

                    {/* Title */}
                    <h2 className="text-center text-4xl font-semibold text-blue-700 mb-6">
                        Welcome to <span className="font-bold text-blue-900">Guru Dakshina</span>
                    </h2>

                    {/* Step Progress */}
                    <div className="flex justify-center mb-10">
                        <div className="w-105">
                            <StepProgress currentStep={2} />
                        </div>
                    </div>


                    {/* PERSONAL DETAILS */}
                    <h3 className="text-lg font-semibold mb-6">Personal Details</h3>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div>
                            <label className="text-sm">Full Name</label>

                            <input
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter Full Name"
                                className={`input ${errors.fullName ? "border-red-500" : ""}`}
                            />

                        </div>

                        <div>
                            <label className="text-sm">Date of Appointment</label>
                            <input
                                name="appointmentDate"
                                value={formData.appointmentDate}
                                onChange={handleChange}
                                type="date"
                                className={`input ${errors.appointmentDate ? "border-red-500" : ""}`}
                            />
                        </div>

                        <div>
                            <label className="text-sm">Date of Birth</label>
                            <input name="dob"
                                type="date"
                                value={formData.dob}
                                onChange={handleChange}
                                className={`input ${errors.dob ? "border-red-500" : ""}`}
                            />
                        </div>

                        <div>
                            <label className="text-sm">Pan Number</label>
                            <input
                                name="pan"
                                value={formData.pan}
                                onChange={handleChange}
                                placeholder="Enter Pan Number"
                                className={`input ${errors.pan ? "border-red-500" : ""}`}
                            />
                        </div>

                        <div>
                            <label className="text-sm">Aadhaar Number</label>

                            <div className="flex gap-2">
                                <input
                                    name="aadhaar"
                                    value={formData.aadhaar}
                                    onChange={handleChange}
                                    placeholder="Enter Aadhaar Number"
                                    className={`input flex-1 ${errors.aadhaar ? "border-red-500" : ""}`}
                                />
                                <button className="bg-blue-600 text-white px-4 rounded">
                                    Get OTP
                                </button>
                            </div>

                        </div>

                        <div>
                            <label className="text-sm">Aadhaar OTP</label>

                            <div className="flex gap-2">
                                <input
                                    name="aadhaarOtp"
                                    value={formData.aadhaarOtp}
                                    onChange={handleChange}
                                    className={`input flex-1 ${errors.aadhaarOtp ? "border-red-500" : ""}`}
                                    placeholder="XXXXXX" />
                                <button className="bg-green-500 text-white px-4 rounded">
                                    Verified
                                </button>
                            </div>

                        </div>

                        <div>
                            <label className="text-sm">School UDISE Code</label>
                            <input
                                name="udise"
                                className={`input ${errors.udise ? "border-red-500" : ""}`}
                                value={formData.udise}
                                onChange={handleChange}
                                placeholder="Enter School UDISE Code" />
                        </div>

                        <div>
                            <label className="text-sm">School Name</label>
                            <input
                                name="schoolName"
                                value={formData.schoolName}
                                onChange={handleChange}
                                className={`input bg-gray-100 ${errors.schoolName ? "border-red-500" : ""}`}
                                placeholder="School name goes here" />
                        </div>

                        <div>
                            <label className="text-sm">District</label>
                            <input
                                name="district"
                                value={formData.district}
                                onChange={handleChange}
                                className={`input bg-gray-100 ${errors.district ? "border-red-500" : ""}`}
                                placeholder="District name goes here" />
                        </div>

                        <div>
                            <label className="text-sm">Constituency</label>
                            <input
                                name="constituency"
                                value={formData.constituency}
                                onChange={handleChange}
                                className={`input bg-gray-100 ${errors.constituency ? "border-red-500" : ""}`}
                                placeholder="Constituency name goes here" />
                        </div>

                        <div>
                            <label className="text-sm">Block</label>
                            <input
                                name="block"
                                value={formData.block}
                                onChange={handleChange}
                                className={`input bg-gray-100 ${errors.block ? "border-red-500" : ""}`}
                                placeholder="Block name goes here" />
                        </div>

                        <div>
                            <label className="text-sm">Cluster</label>
                            <input
                                name="cluster"
                                value={formData.cluster}
                                onChange={handleChange}
                                className={`input bg-gray-100 ${errors.cluster ? "border-red-500" : ""}`}
                                placeholder="Cluster name goes here"
                            />
                        </div>


                        <div>
                            <label className="text-sm">Institution Category</label>
                            <select
                                onChange={handleChange}
                                value={formData.institution}
                                name="institution"
                                className={`input ${errors.institution ? "border-red-500" : ""}`}
                            >
                                <option>Select</option>
                                <option>LP School</option>
                                <option>UP/ME School</option>
                                <option>High School</option>
                                <option>Higher Secondary</option>
                                <option>Degree College</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-sm">Mobile Number</label>
                            <input
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                className={`input bg-gray-100 ${errors.mobile ? "border-red-500" : ""}`}
                                placeholder="+91 9854098540" />
                        </div>

                        <div>
                            <label className="text-sm">Teacher Current Serial UDISE Number</label>
                            <input
                                name="serialUdise"
                                value={formData.SerialUdise}
                                onChange={handleChange}
                                className={`input ${errors.serialUdise ? "border-red-500" : ""}`}
                                placeholder="Enter Serial Number" />
                        </div>

                        <div>
                            <label className="text-sm">Email ID</label>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`input bg-gray-100 ${errors.email ? "border-red-500" : ""}`}
                                placeholder="example@gmail.com" />
                        </div>

                    </div>

                    {/* EMPLOYMENT STATUS */}
                    <h3 className="text-lg font-semibold mt-10 mb-4">
                        Employment Status
                    </h3>

                    <div className="flex items-center gap-6">

                        <span>Currently employed in Government Service?</span>

                        <label className="flex items-center gap-2">
                            <input
                                onChange={() => setEmployedStatus(true)}
                                type="radio"
                                name="emp"
                            />
                            Yes
                        </label>

                        <label className="flex items-center gap-2">
                            <input
                                onChange={() => setEmployedStatus(false)}
                                type="radio"
                                name="emp"
                            />
                            No
                        </label>

                    </div>

                    <div className="mt-4">
                        <label>If Yes, enter select Department name</label>

                        <select className="input mt-1">
                            <option>Select</option>
                        </select>
                    </div>

                    {/* APPLICANT STATUS */}

                    {employedStatus && (
                        <>
                            <h3 className="text-lg font-semibold mt-10 mb-4">
                                Applicant Vital Status
                            </h3>

                            <div className="flex gap-6">

                                <label className="flex items-center gap-2">
                                    <input type="radio" name="status" />
                                    Alive
                                </label>

                                <label className="flex items-center gap-2">
                                    <input type="radio" name="status" />
                                    Deceased
                                </label>

                            </div>

                            <div className="mt-4">
                                <label>Enter Nominee Details</label>
                                <input className="input mt-1" placeholder="Name of nominee" />
                            </div>

                            <div className="mt-4">
                                <label>Relationship with the Deceased Person</label>

                                <select className="input mt-1">
                                    <option>Select</option>
                                    <option>Spouse</option>
                                    <option>Father</option>
                                    <option>Mother</option>
                                    <option>Son</option>
                                    <option>Daughter</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="mt-4 flex items-center gap-4">
                                <p className="text-sm">
                                    Upload ID Card (A valid supporting document establishing relationship)
                                </p>

                                <button className="bg-blue-600 text-white px-4 py-1 rounded">
                                    Upload
                                </button>
                            </div>

                            <div className="mt-4 flex items-center gap-4">
                                <p className="text-sm">Upload Death Certificate</p>

                                <button className="bg-blue-600 text-white px-4 py-1 rounded">
                                    Upload
                                </button>
                            </div>



                            {/* BANK DETAILS */}

                            <h3 className="text-lg font-semibold mt-10 mb-4">
                                Beneficiary Bank Account Details
                            </h3>

                            <div className="grid md:grid-cols-2 gap-6">

                                <div>
                                    <label>Account Holder Name</label>
                                    <input className="input" placeholder="Enter Name" />
                                </div>

                                <div>
                                    <label>Bank Name</label>
                                    <input className="input" placeholder="Enter Bank Name" />
                                </div>

                                <div>
                                    <label>Account Number</label>
                                    <input className="input" placeholder="Enter Account Number" />
                                </div>

                                <div>
                                    <label>IFSC Code</label>
                                    <input className="input" placeholder="Enter IFSC Code" />
                                </div>

                                <div className="flex items-center gap-3">
                                    <p>Upload Bank Passbook</p>
                                    <button className="bg-blue-600 text-white px-4 py-1 rounded">
                                        Upload
                                    </button>
                                </div>

                                <div className="flex items-center gap-3">
                                    <p>Upload Beneficiary PAN Card</p>
                                    <button className="bg-blue-600 text-white px-4 py-1 rounded">
                                        Upload
                                    </button>
                                </div>
                            </div>
                        </>
                    )}



                    <p className="text-sm text-gray-800 mt-6">
                        <span className="text-black font-bold">Note: </span> Against the deceased person, only 1 (one) legal heir is entitled
                        for the financial benefit under the Guru Dakshina scheme.
                    </p>



                    {/* DECLARATION */}

                    <div className="mt-8 flex items-start gap-3">
                        <input
                            className="scale-130"
                            onChange={() => {
                                if (checked === false) {
                                    setChecked(true)
                                } else {
                                    setChecked(false)
                                }
                            }}
                            type="checkbox"
                        />
                        <p className="text-sm text-gray-600">
                            There is no other applicant, except me, who is or will in future
                            apply on behalf of the deceased person.
                        </p>
                    </div>

                    {/* SUBMIT */}

                    <div className="flex justify-center mt-8">

                        <button
                            className={` px-10 py-2 cursor-pointer rounded ${checked
                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                : "bg-gray-400 text-gray-700 cursor-not-allowed"
                                }`}
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Document2;
