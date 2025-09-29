import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import modern from "../assets/modern.png";
import { useNavigate } from "react-router-dom";
import Head from "./Head";
import { Link } from "react-router-dom";
export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("");
  alert("");

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Account created successfully!");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <Head />
      <div className="h-[500px] flex flex-col md:flex-row justify-center items-center container">
        <div className="flex-2 flex flex-col justify-center items-center bg-white px-8 py-12 h-[80%]">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Create new account</h2>
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[var(--blue)] rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[var(--blue)] rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[var(--blue)] rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Your Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[var(--blue)] rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />


            <button
              type="submit"
              className="w-full bg-[var(--blue)] text-white py-2 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Create Account
            </button>
          </form>

          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/login">
              <a href="" className="text-[var(--blue)] hover:underline">
                Log in
              </a>  </Link>
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
