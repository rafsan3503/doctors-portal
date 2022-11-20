import React, { useContext, useState } from "react";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { setToken } from "../../hooks/setToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [email, setEmail] = useState("");

  const { userLogIn, googleLogIn, handleForgetPassword } =
    useContext(AuthContext);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleLogin = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    userLogIn(email, password)
      .then((res) => {
        const user = {
          name: res.user.displayName,
          email: res.user.email,
        };
        setToken(user);
        toast.success("User Log in success!");
        navigate(from, { replace: true });
      })
      .catch((err) => alert(err.message));
  };

  const handleForget = () => {
    if (!email) {
      return toast("Please enter your email first");
    }
    handleForgetPassword(email)
      .then(() => {
        toast("Password reset email send successfully");
      })
      .catch((err) => alert(err.message));
  };

  const handleEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  const handleGoogle = () => {
    googleLogIn()
      .then((res) => {
        const user = {
          name: res.user.displayName,
          email: res.user.email,
        };
        setToken(user);
        toast.success("Google Log in success");
        navigate(from, { replace: true });
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-2xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full" onChange={handleEmail}>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email address is required" })}
              type="email"
              className="input input-bordered mb-3 w-full"
            />
            {errors.email && (
              <p className="text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              className="input input-bordered mb-3 w-full"
            />
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
            <label className="label" onClick={handleForget}>
              <span className="label-text">Forget Password?</span>
            </label>
          </div>
          <input type="submit" value="Submit" className="btn w-full" />
        </form>
        <p className="text-center text-sm my-3">
          New to Doctors Portal?{" "}
          <Link className="text-primary" to="/signup">
            Create New Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogle}
          className="btn btn-outline btn-accent w-full"
        >
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
