import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const { data: specialties = [] } = useQuery({
    queryKey: ["specialty"],
    queryFn: () =>
      fetch("http://localhost:5000/appointmentspecialty").then((res) =>
        res.json()
      ),
  });
  const handleDoctorAdd = (data) => {
    const name = data.name;
    const email = data.email;
    const specialty = data.specialty;
    const image = data.photo[0];
    const formData = new FormData();
    formData.append("image", image);
    const imageHostingKey = process.env.REACT_APP_imageKey;
    const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.url);
        const doctor = {
          name,
          email,
          specialty,
          image: data.data.url,
        };
        console.log(doctor);
        fetch("http://localhost:5000/doctors", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify(doctor),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              toast.success(`${name} added successfully!`);
              navigate("/dashboard/managedoctors");
            }
          });
      });
  };
  return (
    <div>
      <h2 className="text-4xl my-5 p-4">Add a Doctor</h2>
      <form onSubmit={handleSubmit(handleDoctorAdd)} className="w-96 p-7">
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
        <div className="form-control w-full mb-5">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty", { required: "Specialty is required" })}
            className="select select-bordered w-full"
          >
            <option disabled selected>
              Pick a Specialty
            </option>
            {specialties.map((specialty) => (
              <option key={specialty._id}>{specialty.name}</option>
            ))}
          </select>
        </div>
        <div className="form-control w-full mb-5">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="file"
            {...register("photo", { required: "Image is required" })}
            placeholder="Upload a photo"
            accept="image/*"
            className="file-input file-input-bordered w-full"
          />
        </div>

        <input
          type="submit"
          value="Add A Doctor"
          className="btn btn-primary w-full"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
