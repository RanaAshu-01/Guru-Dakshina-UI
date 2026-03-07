import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sign_Up from "../assets/images/Sign-up.svg";

function Register() {

  const [mobile, setMobile] = useState("");
  const [mobileOtp, setMobileOtp] = useState("");
  const [mobileOtpError, setMobileOtpError] = useState(false);
  const [sendMobileOtp, setSendMobileOtp] = useState(false)
  const [mobileResend, setMobileResend] = useState(60)

  const [email, setEmail] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [emailOtpError, setEmailOtpError] = useState(false);
  const [sendEmailOtp, setSendEmailOtp] = useState(false)
  const [emailResend, setEmailResend] = useState(60)

  const [loading, setLoading] = useState(false);
  const [formLocked, setFormLocked] = useState(false);

  const [mobileVerifying, setMobileVerifying] = useState(false);
  const [mobileVerified, setMobileVerified] = useState(false);


  const [emailVerifying, setEmailVerifying] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const isFormValid =
    mobile.length === 10 &&
    mobileOtp.length === 6 &&
    email.includes("@gmail.com") &&
    emailOtp.length === 6
  mobileVerified &&
    emailVerified;;


  /* ================= MOBILE OTP ================= */

  const handleMobileOtp = () => {
    if (mobile.length !== 10) {
      setMobileOtpError(true);
      setSendMobileOtp(false)
    } else {
      setMobileOtpError(false);
      setSendMobileOtp(true);
      setMobileResend(60);
    }
  }

  /* ================= EMAIL OTP ================= */

  const handleEmailOtp = () => {
    if (!email.includes("@gmail.com")) {
      setEmailOtpError(true);
      setSendEmailOtp(false);
    } else {
      setEmailOtpError(false);
      setSendEmailOtp(true);
      setEmailResend(60);   // 👈 important
    }
  };


  /* ================= FINAL SUBMIT ================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      setFormLocked(true);  // 👈 yaha lock ho jayega
      setLoading(true);


      setTimeout(() => {
        setLoading(false);
        setShowPopup(true);
      }, 2000);
    }
  };


  useEffect(() => {
    if (!sendMobileOtp) return;
    if (mobileResend === 0) return;

    const interval = setInterval(() => {
      setMobileResend(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [sendMobileOtp, mobileResend]);

  const handleResend = () => {
    setMobileResend(60);
  };


  useEffect(() => {
    if (!sendEmailOtp) return;
    if (emailResend === 0) return;

    const interval = setInterval(() => {
      setEmailResend(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [sendEmailOtp, emailResend]);

  const handleEmailResend = () => {
    setEmailResend(60);
  };

  return (
    <>
      <Navbar />

      <form onSubmit={handleSubmit}>

        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

         <div className="bg-white shadow-xl rounded-lg w-full min-h-[90vh] max-w-6xl flex flex-col md:flex-row overflow-hidden">


            {/* LEFT IMAGE */}
            <div className="w-full md:w-1/2 bg-blue-50 flex items-center justify-center p-6 md:p-8">
              <img
                src={Sign_Up}
                alt="Register Illustration"
                className="w-60 sm:w-72 md:w-80"
              />
            </div>

            {/* RIGHT FORM */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10">

              <h2 className="text-xl sm:text-3xl  mb-2 text-blue-800">
                Welcome to <span className="text-blue-900 font-bold">Guru Dakshina</span>
              </h2>

              <p className="text-gray-500 text-center mb-6 text-sm sm:text-base">
                Teacher Registration
              </p>

              {/* ================= MOBILE SECTION ================= */}

              <div className="w-full mt-2">

                <div className="flex w-full border rounded overflow-hidden">

                  {/* Country Code */}
                  <div className="px-3  border-r border-gray-400 flex items-center text-black">
                    +91
                  </div>

                  {/* Mobile Input */}
                  <input
                    type="tel"
                    value={mobile}
                    readOnly={sendMobileOtp || formLocked}
                    maxLength="10"
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\d*$/.test(value)) {
                        setMobile(value);
                      }
                    }}
                    placeholder="Enter Mobile No"
                    className={`flex-1 min-w-0 p-3 focus:outline-none 
                    ${sendMobileOtp ? "bg-gray-100 cursor-not-allowed" : ""}`}
                  />

                  {/* Send OTP Button */}
                  <button
                    type="button"
                    onClick={handleMobileOtp}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-5 whitespace-nowrap"
                  >
                    Send OTP
                  </button>

                </div>

              </div>

              {mobileOtpError && (
                <p className="text-right text-red-400 m-2">
                  Please Enter Valid Number
                </p>
              )}

              {sendMobileOtp && (
                <p className="text-right text-green-600 m-2">
                  OTP sent to your Number
                </p>
              )}


              {/* Mobile Otp Input*/}
              <div className="relative w-full mt-3">
                <input
                  type="text"
                  maxLength="6"
                  value={mobileOtp}
                  readOnly={formLocked}
                  onChange={(e) => {
                    const value = e.target.value;
                    setMobileOtp(value);

                    if (value.length === 6) {
                      setMobileVerifying(true);
                      setMobileVerified(false);

                      setTimeout(() => {
                        setMobileVerifying(false);
                        setMobileVerified(true);
                      }, 1500);
                    } else {
                      setMobileVerifying(false);
                      setMobileVerified(false);
                    }
                  }}
                  placeholder="Enter Mobile OTP"
                  className={`w-full border p-3 pr-24 rounded focus:ring-2 focus:ring-green-500
     
                    ${formLocked ? "bg-gray-100 cursor-not-allowed" : ""}
   
                    `}
                />

                {mobileVerifying && (
                  <span className="absolute right-3 top-3 text-blue-500 text-sm font-semibold animate-pulse">
                    Verifying...
                  </span>
                )}

                {mobileVerified && (
                  <span className="absolute right-3 top-3 text-green-600 text-sm font-semibold">
                    Verified ✓
                  </span>
                )}
              </div>

              {sendMobileOtp && (
                <p className="text-right mt-2">
                  {mobileResend > 0 ? (
                    <span className="text-gray-600">
                      Resend In 00:{mobileResend < 10 ? `0${mobileResend}` : mobileResend}
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResend}
                      className="text-blue-500 font-semibold"
                    >
                      Resend OTP
                    </button>
                  )}
                </p>
              )}






              {/*  EMAIL SECTION  */}

              <div className="w-full mt-4">

                <div className="flex w-full border rounded overflow-hidden">

                  {/* Email Input */}
                  <input
                    type="email"
                    value={email}
                    readOnly={sendEmailOtp || formLocked}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email Id"
                    className={`flex-1 min-w-0 p-3 focus:outline-none
                    ${sendEmailOtp ? "bg-gray-100 cursor-not-allowed" : ""}
                    `}
                  />

                  {/* Send OTP Button */}
                  <button
                    type="button"
                    onClick={handleEmailOtp}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-5 whitespace-nowrap"
                  >
                    Send OTP
                  </button>

                </div>

              </div>


              {emailOtpError && (
                <p className="text-right text-red-400 m-2">
                  Please Enter Valid Email
                </p>
              )}

              {sendEmailOtp && (
                <p className="text-right text-green-600 m-2">
                  OTP sent to your Email
                </p>
              )}


              {/* Email Otp Input */}
              <div className="relative w-full mt-3">
                <input
                  type="text"
                  maxLength="6"
                  value={emailOtp}
                  readOnly={formLocked}
                  onChange={(e) => {
                    const value = e.target.value;

                    if (/^\d*$/.test(value)) {
                      setEmailOtp(value);

                      if (value.length === 6) {
                        setEmailVerifying(true);
                        setEmailVerified(false);

                        setTimeout(() => {
                          setEmailVerifying(false);
                          setEmailVerified(true);
                        }, 1500);
                      } else {
                        setEmailVerifying(false);
                        setEmailVerified(false);
                      }
                    }
                  }}
                  placeholder="Enter Email OTP"
                  className={`w-full border p-3 pr-24 rounded focus:ring-2 focus:ring-green-500
   
                    ${formLocked ? "bg-gray-100 cursor-not-allowed" : ""}
   
                    `}
                />

                {emailVerifying && (
                  <span className="absolute right-3 top-3 text-blue-500 text-sm font-semibold animate-pulse">
                    Verifying...
                  </span>
                )}

                {emailVerified && (
                  <span className="absolute right-3 top-3 text-green-600 text-sm font-semibold">
                    Verified ✓
                  </span>
                )}
              </div>




              {sendEmailOtp && (
                <p className="text-right mt-2 ">
                  {emailResend > 0 ? (
                    <span className="text-gray-600">
                      Resend In 00:{emailResend < 10 ? `0${emailResend}` : emailResend}
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleEmailResend}
                      className="text-blue-500 font-semibold"
                    >
                      Resend OTP
                    </button>
                  )}
                </p>
              )}


              {/* ================= CONTINUE BUTTON ================= */}

              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-3 rounded mt-6 transition
                   ${isFormValid
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-400 cursor-not-allowed text-white"} `}
              >
                {loading ? "Processing..." : "Continue"}
              </button>

              {/* ================= LOGIN LINK ================= */}

              <p className="text-sm text-gray-500 mt-14 text-center ">
                Already have an Account?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 font-semibold"
                >
                  Login here
                </Link>
              </p>

            </div>
          </div>
        </div>

      </form >



      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">

          {/* Popup Box */}
          <div className="bg-white w-[90%] max-w-md p-6 rounded-xl shadow-2xl text-center relative animate-fadeIn">

            <h2 className="text-2xl font-bold text-green-600 mb-4">
             verifyed Successful ✅
            </h2>

           

            <button
              onClick={() => {
                setLoading(true);

                setTimeout(() => {
                  navigate("/documentation");
                }, 2000); // 👈 2 second delay
              }}
              className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Countinue
            </button>


          </div>
        </div>
      )}

    </>
  );
}

export default Register;
