import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaDiscord } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });

    // ✅ Redirect to Index after login
    navigate("/index");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen font-quicksand relative"
      style={{
        backgroundImage: `url('/assets/sign-bg.png')`, // replace with your image later!
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-white/60 pointer-events-none" />

      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg relative z-10">
        {/* Logo + Title */}
        <div className="text-center mb-6">
          <div className="mx-auto w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-3">
            <span className="text-blue-600 text-xl font-bold font-quicksand">Ψ</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 font-quicksand">Welcome to MHapa!</h1>
          <p className="text-gray-500 font-inter">Continue your mental wellness journey</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none font-inter"
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none font-inter"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition font-quicksand"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-sm text-gray-500 font-inter">Or continue with</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social Logins */}
        <div className="flex justify-center space-x-4">
          <button className="p-3 border rounded-lg hover:bg-gray-50">
            <FaGoogle className="text-red-500" />
          </button>
          <button className="p-3 border rounded-lg hover:bg-gray-50">
            <FaFacebook className="text-blue-600" />
          </button>
          <button className="p-3 border rounded-lg hover:bg-gray-50">
            <FaDiscord className="text-indigo-600" />
          </button>
        </div>

        {/* Sign up link */}
        <p className="text-center text-sm text-gray-600 mt-6 font-inter">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>

        {/* Footer */}
        <div className="mt-6 text-sm text-gray-500">
          <p className="font-medium font-quicksand">What awaits you:</p>
          <ul className="mt-1 grid grid-cols-2 gap-x-3 text-gray-600 font-inter">
            <li>🌴 Interactive Quest Islands</li>
            <li>🏅 Achievements & Badges</li>
            <li>🧘 Mindfulness Activities</li>
            <li>📘 Learning Lessons</li>
          </ul>
        </div>

        <p className="mt-6 text-xs text-gray-400 text-center font-inter">
          By continuing, you agree to our{" "}
          <a href="#" className="underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}