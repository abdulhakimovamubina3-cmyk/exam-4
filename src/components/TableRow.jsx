import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/users/usersSlice";

function TableRow({ user, onEdit }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
  };

  return (
    <tr className="border-t border-gray-200 transition hover:bg-gray-50">
      <td className="px-5 py-4 font-medium">{user.id}</td>

      <td className="px-5 py-4">
        <img
          src={user.avatar}
          alt={user.firstName}
          className="h-10 w-10 rounded-full object-cover"
        />
      </td>

      <td className="px-5 py-4 font-medium text-gray-800">{user.firstName}</td>
      <td className="px-5 py-4 text-gray-600">{user.lastName}</td>
      <td className="px-5 py-4 text-gray-600">{user.age}</td>
      <td className="px-5 py-4 text-gray-600">{user.email}</td>
      <td className="px-5 py-4 text-gray-600">{user.profession}</td>
      <td className="px-5 py-4 font-semibold text-green-600">${user.salary}</td>

      <td className="px-5 py-4">
        <div className="flex gap-2">
          <Button
            text="Edit"
            variant="secondary"
            onClick={() => onEdit(user)}
          />
          <Button text="Delete" variant="danger" onClick={handleDelete} />
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
