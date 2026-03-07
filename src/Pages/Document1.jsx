import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import { useState } from 'react';
import StepProgress from "../components/StepProgress";

const Document1 = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const options = [
    "My service has not been provincialisation in 2013",
    "My service has not been provincialisation in 2021",
    "My service has not been provincialisation under RCLP / Bani Kanta Computer Scheme Teachers",
    "My service has not been provincialisation under Operation Black Board",
    "My service has not been provincialisation under Siksha Mitra"
  ];

  const navigate = useNavigate()

  const handleCheck = (index) => {
    if (checkedItems.includes(index)) {
      setCheckedItems(checkedItems.filter(item => item !== index));
    } else {
      setCheckedItems([...checkedItems, index]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[90vh] bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white w-full max-w-4xl min-h-[70vh] flex justify-center items-center shadow-xl rounded-lg p-8">
          <div className='w-full max-w-[60vh]'>
            <h2 className="text-3xl font-semibold text-blue-800 mb-6  text-center">
              Welcome to <span className="text-blue-900 font-bold">Guru Dakshina</span>
            </h2>

            {/* Step Progress 1---2---3---4---5 */}
            <StepProgress currentStep={1} />

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {options.map((text, index) => (
                  <label key={index} className="flex items-center gap-3 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes(index)}
                      onChange={() => handleCheck(index)}
                      className=" text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span>{text}</span>
                  </label>
                ))}
              </div>

              {/* Submit Button */}
              <div className="text-center mt-8">
                <button
                  type="submit"
                  disabled={checkedItems.length === 0}
                  className={`px-8 py-3 rounded transition
                    ${checkedItems.length > 0
                      ? "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
                      : "bg-gray-400 text-white cursor-not-allowed"
                    }`}
                  onClick={() => {
                    setTimeout(() => {
                      navigate("/personal details");
                    }, 2000);
                  }
                  }

                >
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Document1
