import Navbar from "../components/Navbar";
import StepProgress from "../components/StepProgress";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Document3 = () => {

    const navigate = useNavigate()

    const [errorMsg, setErrorMsg] = useState("");




   const handleSubmit = () => {

  const fields = document.querySelectorAll("input, select");

  let empty = false;

  fields.forEach((field) => {
    if (field.value.trim() === "" || field.value === "Select") {
      empty = true;
    }
  });

  if (empty) {
    setErrorMsg("Please fill all fields");
    return;
  }

  setErrorMsg("");

  setTimeout(() => {
    navigate("/bank details");
  }, 1000);

};






    return (

        <>
            <Navbar />

            <div className="min-h-screen bg-gray-100 flex justify-center px-4 py-10">

                <div className="sm:bg-white  w-full max-w-6xl sm:shadow-lg rounded sm:px-16 py-8">

                    {/* Title */}

                    <h2 className="text-center text-4xl font-semibold text-blue-700 mb-6">
                        Welcome to <span className="font-bold text-blue-900">Guru Dakshina</span>
                    </h2>


                    {/* Step Progress */}

                    <div className="flex justify-center mb-10">
                        <div className="w-105">
                            <StepProgress currentStep={3} />
                        </div>
                    </div>


                    {/* EDUCATIONAL QUALIFICATION */}

                    <h3 className="text-lg font-semibold mb-4">
                        Educational Qualification
                    </h3>

                    <p className="text-sm text-gray-600 mb-2">
                        Academic Qualification
                    </p>

                    <p className="text-xs text-gray-500 mb-3">
                        Please select your highest qualification
                    </p>


                    <div className="flex gap-6 mb-8">

                        <select className="input w-87.5">
                            <option  value="">Select</option>
                            <option>Class VIII</option>
                            <option>HSLC</option>
                            <option>HS</option>
                            <option>Graduation</option>
                            <option>Post-Graduation</option>
                        </select>

                    </div>


                    {/* TABLE 1 */}

                    <p className="text-sm mb-2 font-medium">
                        Enter your Highest Education Qualification Details
                    </p>

                    <div className="overflow-x-auto mb-10">

                        <table className="w-full border text-sm">

                            <thead className="bg-gray-100">

                                <tr>

                                    <th className="border px-3 py-2">School/College</th>
                                    <th className="border px-3 py-2">Year of Passing</th>
                                    <th className="border px-3 py-2">Percentage of Marks</th>
                                    <th className="border px-3 py-2">Board/University</th>
                                    <th className="border px-3 py-2">Subject(s)</th>

                                </tr>

                                <tr>

                                    <td className="border p-2">
                                        <input
                                            name="school"
                                            placeholder="School / College"
                                            className= "w-full text-center outline-none"
                                        />
                                    </td>

                                    <td className="border p-2">
                                        <input className="w-full outline-none text-center" placeholder="Year" />
                                    </td>

                                    <td className="border p-2">
                                        <input className="w-full outline-none text-center" placeholder="Percentage" />
                                    </td>

                                    <td className="border p-2">
                                        <input className="w-full outline-none text-center" placeholder="Board / University" />
                                    </td>

                                    <td className="border p-2">
                                        <input className="w-full outline-none text-center" placeholder="Subjects" />
                                    </td>

                                </tr>

                            </thead>



                        </table>

                    </div>


                    {/* PROFESSIONAL QUALIFICATION */}

                    <h3 className="text-lg font-semibold mb-4">
                        Professional Qualification
                    </h3>

                    <div className="flex gap-6 mb-8">

                        <select className="input w-87.5">
                            <option>Please Select your Professional Qualification</option>
                            <option>B.Ed</option>
                            <option>D.El.Ed</option>
                            <option>SLET</option>
                            <option>NET</option>
                            <option>PhD</option>
                        </select>

                    </div>


                    {/* TABLE 2 */}

                    <p className="text-sm mb-2 font-medium">
                        Enter your Professional Qualification Details
                    </p>

                    <div className="overflow-x-auto mb-10">

                        <table className="w-full border text-sm">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border px-3 py-2">Institution</th>
                                    <th className="border px-3 py-2">Year of Passing</th>
                                    <th className="border px-3 py-2">Percentage of Marks</th>
                                    <th className="border px-3 py-2">Affiliation Body</th>
                                    <th className="border px-3 py-2">Subject(s)</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="border p-2">
                                        <input
                                            type="text"
                                            placeholder="Enter Institution"
                                            className="w-full text-center outline-none"
                                        />
                                    </td>

                                    <td className="border p-2">
                                        <input
                                            type="text"
                                            placeholder="Year"
                                            className="w-full text-center outline-none"
                                        />
                                    </td>

                                    <td className="border p-2">
                                        <input
                                            type="text"
                                            placeholder="% Marks"
                                            className="w-full text-center outline-none"
                                        />
                                    </td>

                                    <td className="border p-2">
                                        <input
                                            type="text"
                                            placeholder="Affiliation"
                                            className="w-full text-center outline-none"
                                        />
                                    </td>

                                    <td className="border p-2">
                                        <input
                                            type="text"
                                            placeholder="Subjects"
                                            className="w-full text-center outline-none"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    {/* TET QUALIFICATION */}

                    <h3 className="text-lg font-semibold mb-4">
                        TET Qualification
                    </h3>


                    <div className="flex gap-6 mb-8">

                        <select className="input w-87.5">
                            <option>Please Select your TET Qualification</option>
                            <option>Assam TET</option>
                            <option>CTET</option>
                        </select>

                    </div>


                    {/* TABLE 3 */}

                    <p className="text-sm mb-2 font-medium">
                        Enter your Professional Qualification Details
                    </p>


                    <div className="overflow-x-auto mb-10">

                        <table className="w-full border text-sm">

                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border px-3 py-2">Institution</th>
                                    <th className="border px-3 py-2">Year of Passing</th>
                                    <th className="border px-3 py-2">Percentage of Marks</th>
                                    <th className="border px-3 py-2">Affiliation Body</th>
                                    <th className="border px-3 py-2">Subject(s)</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="border p-2">
                                        <input
                                            type="text"
                                            placeholder="Institution"
                                            className="w-full text-center outline-none"
                                        />
                                    </td>

                                    <td className="border p-2">
                                        <input
                                            type="text"
                                            placeholder="Year"
                                            className="w-full text-center outline-none"
                                        />
                                    </td>

                                    <td className="border p-2">
                                        <input
                                            type="text"
                                            placeholder="% Marks"
                                            className="w-full text-center outline-none"
                                        />
                                    </td>

                                    <td className="border p-2">
                                        <input
                                            type="text"
                                            placeholder="Affiliation"
                                            className="w-full text-center outline-none"
                                        />
                                    </td>

                                    <td className="border p-2">
                                        <input
                                            type="text"
                                            placeholder="Subjects"
                                            className="w-full text-center outline-none"
                                        />
                                    </td>
                                </tr>
                            </tbody>

                        </table>


                    </div>

                    {errorMsg && (
                        <p className="text-red-500 text-center mb-3">
                            {errorMsg}
                        </p>
                    )}

                    {/* SUBMIT BUTTON */}

                    <div className="flex justify-center">

                        <button className="bg-blue-600 text-white px-10 py-2 rounded hover:bg-blue-700"
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

export default Document3;
