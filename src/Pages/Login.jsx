import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login2 from "../assets/images/Login2.svg";
import { useState, useEffect } from "react";

function Login() {

  const [otpInput, setOtpInput] = useState(false);   // OTP input show/hide
  const [numCheck, setNumCheck] = useState("");     // Mobile number
  const [numError, setNumError] = useState(false);  // Mobile error

  const [otpCoundown, setOtpCoundown] = useState(60); // 90 sec timer
  const [otpValue, setOtpValue] = useState("");       // OTP value
  const [otpError, setOtpError] = useState(false);    // OTP error

  const [loading, setLoading] = useState(false);      // Verify loading state

  const [otpVerifying, setOtpVerifying] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const [numChange, setNumChange] = useState(false)

  const [numberLocked, setNumberLocked] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate(); // Page navigation


  /*  SEND OTP FUNCTION */

  const sendOtp = (e) => {
    e.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;

    // Check if mobile number is valid
    if (phoneRegex.test(numCheck)) {

      setTimeout(() => {
        setOtpInput(true);
        setNumError(false);
        setNumChange(true);
        setNumberLocked(true);
      }, 1000);
      // Remove error
    } else {
      setNumError(true);     // Show error
      setOtpInput(false);    // Hide OTP input
    }
  };


  /*  RESEND OTP FUNCTION */

  const handleResend = () => {
    setOtpCoundown(60);  // Reset timer
    setOtpValue("");     // Clear old OTP
    setOtpError(false);  // Remove error
  };


  /*  VERIFY OTP FUNCTION */

  const verifyOtp = (e) => {
    e.preventDefault();

    if (!isChecked) {
      alert("Please confirm the checkbox first");
      return;
    }

    if (otpValue.length === 6) {
      setOtpError(false);
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 1500);
    } else {
      setOtpError(true);
    }
  };


  /*  COUNTDOWN TIMER EFFECT */

  useEffect(() => {
    if (!otpInput) return;        // Run only when OTP input visible
    if (otpCoundown === 0) return;

    const interval = setInterval(() => {
      setOtpCoundown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [otpInput, otpCoundown]);


  const UpDateNum = () => {

    setTimeout(() => {
      setOtpInput(false);
      setOtpValue("");
      setOtpVerified(false);
      setOtpVerifying(false);
      setOtpCoundown(60);
      setNumChange(false);
      setLoading(false);
      setNumberLocked(false);
      setIsChecked(false);
    }, 1000);

  };




  return (
    <>
      <Navbar />

      {/* Form Submit: If OTP visible → verify, else → send OTP */}
      <form onSubmit={otpInput ? verifyOtp : sendOtp}>

        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">

          <div className="bg-white shadow-xl rounded-lg w-full min-h-[80vh] max-w-6xl flex flex-col md:flex-row overflow-hidden">

            {/* Left Side Image */}
            <div className="w-full md:w-1/2 bg-blue-50 flex items-center justify-center p-6 md:p-8">
              <img
                src={Login2}
                alt="Login Illustration"
                className="w-60 sm:w-72 md:w-80"
              />
            </div>

            {/* Right Side Form */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10">

              <h2 className="text-xl text-blue-800 sm:text-3xl  mb-2">
                Welcome to <span className="text-blue-900 font-bold ">Guru Dakshina</span>
              </h2>

              <p className="text-gray-500 text-center mb-6 text-sm sm:text-base">
                Teacher Login
              </p>

              {/* Number Change Content */}
              {numChange && (
                <div className="text-center mb-5 text-gray-500">
                  <p>Please enter the OTP sent to </p>
                  <p

                  >
                    {numCheck}{" "}
                    < span className="text-blue-500 cursor-pointer hover:underline"
                      onClick={UpDateNum}
                    >
                      Change Number
                    </span>
                  </p>
                </div>
              )}

              {/*  Mobile Input */}

              <input
                type="tel"
                value={numCheck}
                readOnly={numberLocked}
                maxLength="10"
                onChange={(e) => {
                  const value = e.target.value;

                  if (/^\d*$/.test(value)) {
                    setNumCheck(value);

                    if (value.length === 10) {
                      setNumError(false);
                    }
                  }
                }}
                placeholder="Enter Mobile No"
                className="w-full border p-3 rounded mb-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {numError && (
                <p className="text-red-500">Please Enter valid Number</p>
              )}


              {/* OTP SECTION */}

              {otpInput && (
                <>
                  <div className="relative mt-4">

                    <input
                      type="password"
                      value={otpValue}
                      maxLength="6"
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^\d*$/.test(value)) {
                          setOtpValue(value);

                          if (value.length === 6) {
                            setOtpVerifying(true);
                            setOtpVerified(false);

                            setTimeout(() => {
                              setOtpVerifying(false);
                              setOtpVerified(true);
                            }, 2000);
                          } else {
                            setOtpVerifying(false);
                            setOtpVerified(false);
                          }
                        }
                      }}

                      placeholder="Enter OTP"
                      className={`w-full border p-3 rounded transition-all duration-300
                      ${otpValue.length === 6
                          ? "border-green-500 focus:ring-2 focus:ring-green-500"
                          : "focus:ring-2 focus:ring-green-400"}`}
                    />

                    {/* Show Verified text when OTP length is 6 */}
                    {otpVerifying && (
                      <span className="absolute right-3 top-3 text-blue-500 text-sm font-semibold animate-pulse">
                        Verifying...
                      </span>
                    )}

                    {/* Verified */}
                    {otpVerified && (
                      <span className="absolute right-3 top-3 text-green-600 text-sm font-semibold">
                        Verified ✓
                      </span>
                    )}

                    
                  </div>

                  {otpError && (
                    <p className="text-red-500">Please enter valid OTP</p>
                  )}

                  {/* RESEND TIMER  */}

                  <p className="text-right mt-2">
                    {otpCoundown > 0 ? (
                      <span className="text-gray-600">
                        Resend In 00:{otpCoundown < 10 ? `0${otpCoundown}` : otpCoundown}
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


                  <div className="flex items-start gap-3 mt-4 text-gray-500">

                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                      className="mt-1 cursor-pointer shrink-0"
                    />

                    <p className="text-sm sm:text-base leading-snug">
                      Are you a "dropped Teacher" in PMS and has 4 years continuity in UDISE
                    </p>

                  </div>

                  {/*  VERIFY BUTTON  */}

                  <button
                    type="submit"
                    disabled={loading || !isChecked}
                    onClick={() => {
                      setTimeout(() => {
                        navigate("/Dashboard");
                      }, 2000);
                    }
                    }

                    className={`w-full py-3 rounded mt-4 transition
                        ${isChecked
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "bg-gray-400 cursor-not-allowed text-white"}

  `}
                  >
                    {loading ? "Sign-In..." : "Sign-In"}
                  </button>
                </>
              )}


              {/*  REQUEST OTP BUTTON  */}

              {!otpInput && (
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
                >
                  Request OTP
                </button>
              )}

              {/*  REGISTER LINK  */}

              <p className="text-sm text-blue-800 mt-4">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-900 font-semibold"
                >
                  Register here
                </Link>
              </p>

            </div>
          </div>
        </div>
      </form >
    </>
  );
}

export default Login;
