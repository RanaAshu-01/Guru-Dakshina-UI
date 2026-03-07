import { Link } from "react-router-dom";
import Login from "../assets/images/Login.svg";

function Landing() {
  return (
    <div 
     style={{ backgroundImage: `url(${Login})` }}
    className="h-screen w-full bg-amber-300  from-indigo-900 via-purple-800 to-pink-700 flex items-center justify-center relative overflow-hidden">

       <div className="absolute inset-0 bg-black/80"></div>
      
     
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff20"
          d="M0,224L80,208C160,192,320,160,480,165.3C640,171,800,213,960,218.7C1120,224,1280,192,1360,176L1440,160V320H0Z"
        ></path>
      </svg>

      
      <div className="text-center text-white z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Welcome To <span className="text-blue-500">Guru Dakshina</span>
        </h1>

        <p className="mb-8 text-lg tracking-wide opacity-90 flex flex-col">
          Please Login And Registered Your Account
        </p>

        <div className="flex gap-6 justify-center">
          <Link to="/login">
            <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow-lg hover:scale-105 transition duration-300">
              Sign-In
            </button>
          </Link>

          <Link to="/register">
            <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-lg hover:scale-105 transition duration-300">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
