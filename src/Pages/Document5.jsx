import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import StepProgress from "../components/StepProgress";

const Document5 = () => {

    const navigate = useNavigate()

    const documents = [
        "Aadhaar Card",
        "Pan Card",
        "Applicant Bank Passbook (In case of non-deceased)",
        "Highest Academic Qualification Marksheet/Certificate",
        "TET Marksheet/Certificate",
        "School Recognition Order",
        "Applicant Joining Letter",
        "Scheme Engagement Order",
        "Service Continuity Letter from Head of the Institution"
    ];

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-100 flex justify-center px-4 py-10">

                <div className="bg-white w-full max-w-5xl shadow-lg rounded-lg px-6 md:px-10 py-8">

                    {/* Title */}
                    <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
                        Welcome to <span className="font-bold text-gray-800">Guru Dakshina</span>
                    </h2>

                    {/* Progress */}
                    <div className="flex justify-center mb-10">
                        <div className="w-72 md:w-96">
                            <StepProgress currentStep={5} />
                        </div>
                    </div>

                    {/* Section Title */}
                    <h3 className="text-lg font-semibold text-gray-700 mb-6">
                        Documents Upload
                    </h3>

                    {/* DOCUMENT LIST */}
                    <div className="space-y-4">

                        {documents.map((doc, index) => (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b pb-3"
                            >

                                <p className="text-sm text-gray-700">
                                    {doc}
                                </p>

                                <div>

                                    <input
                                        type="file"
                                        id={`file-${index}`}
                                        className="hidden"
                                    />

                                    <label
                                        htmlFor={`file-${index}`}
                                        className="bg-blue-600 text-white text-sm px-4 py-1 rounded cursor-pointer hover:bg-blue-700"
                                    >
                                        Upload
                                    </label>

                                </div>

                            </div>
                        ))}

                    </div>

                    {/* Professional Qualification */}
                    <div className="border-b pb-3 mt-3">

                        <p className="text-sm text-gray-700 mb-2">
                            Professional Qualification Marksheet/Certificate
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">

                            <div className="flex items-center gap-2">
                                <span className="text-sm">Document 1 (If Applicable)</span>

                                <input type="file" id="doc1" className="hidden" />

                                <label
                                    htmlFor="doc1"
                                    className="bg-blue-600 text-white text-xs px-3 py-1 rounded cursor-pointer hover:bg-blue-700"
                                >
                                    Upload
                                </label>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-sm">Document 2 (If Applicable)</span>

                                <input type="file" id="doc2" className="hidden" />

                                <label
                                    htmlFor="doc2"
                                    className="bg-blue-600 text-white text-xs px-3 py-1 rounded cursor-pointer hover:bg-blue-700"
                                >
                                    Upload
                                </label>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-sm">Document 3 (If Applicable)</span>

                                <input type="file" id="doc3" className="hidden" />

                                <label
                                    htmlFor="doc3"
                                    className="bg-blue-600 text-white text-xs px-3 py-1 rounded cursor-pointer hover:bg-blue-700"
                                >
                                    Upload
                                </label>
                            </div>

                        </div>

                    </div>


                    {/* SUBMIT */}
                    <div className="flex justify-center mt-10">

                        <button
                            onClick={() => {
                                setTimeout(() => {
                                    navigate("/Dashboard");
                                }, 1200);
                            }
                            }
                            className="bg-blue-600 text-white px-10 py-2 rounded hover:bg-blue-700 transition">
                            Submit
                        </button>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Document5;
