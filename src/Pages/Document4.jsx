import { useState } from "react";
import Navbar from "../components/Navbar";
import StepProgress from "../components/StepProgress";
import { useNavigate } from "react-router-dom";

const Document4 = () => {

    const navigate = useNavigate()

    const [errors, setErrors] = useState({})

    const [formData, setFormData] = useState({
        holderName: "",
        bankName: "",
        accountNumber: "",
        ifsc: "",

    }
    )

    const validateForm = () => {

        let newErrors = {}

        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newErrors[key] = true
            }
        })

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0
    }


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = () => {

        const valid = validateForm()

        if (!valid) return

        setTimeout(() => {
            navigate("/document upload")
        }, 1000)

    }


    return (


        <>
            <Navbar />

            <div className="min-h-screen bg-gray-100 flex justify-center px-4 py-10">

                <div className="bg-white w-full max-w-5xl shadow-lg rounded-lg px-6 md:px-10 py-8">

                    {/* Title */}
                    <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
                        Welcome to <span className="font-bold text-gray-800">Guru Dakshina</span>
                    </h2>

                    {/* Step Progress */}
                    <div className="flex justify-center mb-10">
                        <div className="w-72 md:w-96">
                            <StepProgress currentStep={4} />
                        </div>
                    </div>

                    {/* Section Title */}
                    <h3 className="text-lg font-semibold text-gray-700 mb-6">
                        Applicant Bank Details
                    </h3>

                    {/* FORM */}
                    <div className="grid md:grid-cols-2 gap-6">

                        {/* Account Holder */}
                        <div>
                            <label className="text-sm text-gray-600">
                                Account Holder Name
                            </label>

                            <input
                                name="holderName"
                                value={formData.holderName}
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter Full Name"
                                className={`w-full border rounded px-3 py-2 mt-1 
                                ${errors.holderName ? "border-red-500" : "border-gray-300"}`}
                            />
                        </div>

                        {/* Bank Name */}
                        <div>
                            <label className="text-sm text-gray-600">
                                Bank Name
                            </label>

                            <input
                                name="bankName"
                                value={formData.bankName}
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter Bank Name"
                                className={`w-full border rounded px-3 py-2 mt-1 
                                ${errors.bankName ? "border-red-500" : "border-gray-300"}`}
                            />

                        </div>

                        {/* Account Number */}
                        <div>
                            <label className="text-sm text-gray-600">
                                Account Number
                            </label>

                            <input
                                name="accountNumber"
                                value={formData.accountNumber}
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter Account Number"
                                className={`w-full border rounded px-3 py-2 mt-1 
                                ${errors.accountNumber ? "border-red-500" : "border-gray-300"}`}
                            />
                        </div>

                        {/* IFSC */}
                        <div>
                            <label className="text-sm text-gray-600">
                                IFSC Code
                            </label>

                            <input
                                name="ifsc"
                                value={formData.ifsc}
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter IFSC Code"
                               className={`w-full border rounded px-3 py-2 mt-1 
                                ${errors.ifsc ? "border-red-500" : "border-gray-300"}`}
                            />
                        </div>

                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-10">

                        <button
                            className="bg-blue-600 text-white px-10 py-2 rounded hover:bg-blue-700 transition"
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

export default Document4;
