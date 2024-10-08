"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/feachures/authSlice";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Login = () => {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // redux state
  const { isLoading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLoginEvent = async (e) => {
    e.preventDefault();
    let userCredential = {
      email,
      password,
    };
    try {
      dispatch(loginUser(userCredential)).then((result) => {
        if (result.payload) {
          setEmail("");
          setPassword("");
          router.replace("/");
        }
      });
    } catch (err) {
      console.error("Login failed: ", err);
    }
  };
  return (
    <div className="h-[100%] items-center flex justify-center px-5 lg:px-0">
      <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1 bg-gradient-to-t from-slate-900 via-stone-900 to-gray-900">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-white">
                Sign in
              </h1>
              <p className="text-[12px] text-gray-500"></p>
            </div>
            <form onSubmit={handleLoginEvent}>
              <div className="w-full flex-1 mt-8">
                <div className="mx-auto max-w-xs flex flex-col gap-4">
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">
                      {" "}
                      {isLoading ? "Loading..." : "Login"}
                    </span>
                  </button>
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}
                  <p className="mt-6 text-xs text-white text-center">
                    Dont have an account?{" "}
                    <Link href="/signup">
                      <span className="text-white font-semibold">Sign up</span>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
