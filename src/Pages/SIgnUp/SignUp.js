import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { setToken } from "../../hooks/setToken";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser, googleLogIn, updateUser } = useContext(AuthContext);
  const handleSignUp = (data) => {
    const email = data.email;
    const password = data.password;
    createUser(email, password)
      .then((result) => {
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then((res) => {
            const user = {
              name: result.user.displayName,
              email: result.user.email,
            };
            setToken(user);
            toast.success("update success");
            navigate("/");
          })
          .catch((err) => toast.error(err.message));
      })
      .catch((err) => toast.error(err.message));
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
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-2xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              className="input input-bordered mb-3 w-full"
            />
            {errors.name && (
              <p className="text-red-600" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
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
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
              type="password"
              className="input input-bordered mb-3 w-full"
            />
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>
          <input type="submit" value="Sign Up" className="btn w-full" />
        </form>
        <p className="text-center text-sm my-3">
          Already Have an account?{" "}
          <Link className="text-primary" to="/login">
            Please Login
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

export default SignUp;
