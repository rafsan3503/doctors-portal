import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const ManageDoctors = () => {
  const { data: doctors = [], refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: () =>
      fetch("http://localhost:5000/doctors").then((res) => res.json()),
  });

  //   delete doctor
  const handleDelete = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this doctor?"
    );
    if (confirm) {
      fetch(`http://localhost:5000/doctors/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Doctor deleted successfully!");
            refetch();
          }
        });
    }
  };
  return (
    <div>
      <div className="p-10">
        <div className="pt-10 pb-3 flex justify-between">
          <h2 className="text-3xl">Manage Doctors</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-info">
              <tr>
                <th></th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Specialty</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor, id) => (
                <tr key={doctor._idx}>
                  <td>{id + 1}</td>
                  <td>
                    <div class="avatar">
                      <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={doctor.image} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{doctor.name}</td>
                  <td>{doctor.specialty}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(doctor._id)}
                      className="btn btn-xs bg-red-600 text-white"
                    >
                      Delete
                    </button>
                    <label
                      htmlFor="confirmation-modal"
                      className="btn btn-xs bg-red-600 text-white"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ConfirmationModal />
        </div>
      </div>
    </div>
  );
};

export default ManageDoctors;
