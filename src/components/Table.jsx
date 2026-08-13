import React from "react";
import { users } from "../data/users";
import Button from "./Button";

import { useSelector, useDispatch } from "react-redux";

function Table() {
  let { users } = useSelector((state) => state.users);
  console.log(users);

  return (
    <div className="w-full overflow-x-auto p-5">
      <table className="w-full min-w-1000px overflow-hidden rounded-xl bg-white shadow-lg">
        <thead className="bg-gray-100">
          <tr className="text-left text-sm text-gray-600">
            <th className="px-5 py-4">ID</th>
            <th className="px-5 py-4">Avatar</th>
            <th className="px-5 py-4">First Name</th>
            <th className="px-5 py-4">Last Name</th>
            <th className="px-5 py-4">Age</th>
            <th className="px-5 py-4">Email</th>
            <th className="px-5 py-4">Profession</th>
            <th className="px-5 py-4">Salary</th>
            <th className="px-5 py-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-t border-gray-200 transition hover:bg-gray-50"
            >
              <td className="px-5 py-4 font-medium">{user.id}</td>

              <td className="px-5 py-4">
                <img
                  src={user.avatar}
                  alt={user.firstName}
                  className="h-10 w-10 rounded-full object-cover"
                />
              </td>

              <td className="px-5 py-4 font-medium text-gray-800">
                {user.firstName}
              </td>

              <td className="px-5 py-4 text-gray-600">{user.lastName}</td>

              <td className="px-5 py-4 text-gray-600">{user.age}</td>

              <td className="px-5 py-4 text-gray-600">{user.email}</td>

              <td className="px-5 py-4 text-gray-600">{user.profession}</td>

              <td className="px-5 py-4 font-semibold text-green-600">
                ${user.salary}
              </td>

              <td className="px-5 py-4">
                <div className="flex gap-2">
                  <Button text="Edit" variants="secondary" />
                  <Button text="Delete" variants="primary" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
