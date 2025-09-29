import { useState } from "react";
import { auth } from "../../firebaseconfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import modern from "../assets/modern.png";
import Head from "./Head";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userdata = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(userdata.user));
      navigate("/home");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <Head />
      <div className="h-[500px] flex flex-col md:flex-row justify-center items-center container">
        <div className="flex-2 flex flex-col justify-center items-center bg-white px-8 py-12 h-[80%]">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Log In </h2>
          <form onSubmit={handleLogin} className="w-full max-w-md space-y-4">
            <input
              type="email"
              placeholder="Enter Your Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-[var(--blue)] rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-[var(--blue)] rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />


            <div className="flex justify-between items-center text-sm text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <a href="#" className="text-[var(--blue)] hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--blue)] text-white py-2 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Log In
            </button>
          </form>

          <p className="mt-4 text-sm">
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/")}
              className="text-[var(--blue)] hover:underline"
            >
              Create One
            </button>
          </p>
        </div>

        <div className="flex-1 h-[80%] w-full hidden md:block">
          <img
            src={modern}
            alt="Modern house"
            className="w-full h-full object-cover rounded-l-3xl"
          />
        </div>
      </div>
    </>
  );
}
