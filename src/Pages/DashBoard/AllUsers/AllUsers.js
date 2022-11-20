import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users`);
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: { authorization: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make admin successful!");
          refetch();
        }
      });
  };
  return (
    <div>
      <div className="p-10">
        <div className="pt-10 pb-3 flex justify-between">
          <h2 className="text-3xl">All Users</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-info">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Admin</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, id) => (
                <tr key={user._idx}>
                  <th>{id + 1}</th>
                  <td>{user.name}</td>
                  <td>
                    {user.role === "admin" ? (
                      <button className="btn btn-xs btn-secondary">
                        Admin
                      </button>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="btn btn-xs btn-primary"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td>
                    <button className="btn btn-xs">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
