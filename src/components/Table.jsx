import React, { useState } from "react";
import { useSelector } from "react-redux";
import TableRow from "./TableRow";
import Button from "./Button";
import AddUserModal from "./AddUserModal";
import EditUserModal from "./EditUserModal";

function Table() {
  const { users } = useSelector((state) => state.users);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const closeEditModal = () => {
    setEditingUser(null);
  };

  return (
    <div className="w-full overflow-x-auto p-5">
      <div className="mb-4 flex justify-end">
        <Button
          text="+ Add User"
          variant="primary"
          onClick={() => setIsAddModalOpen(true)}
        />
      </div>

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
            <TableRow key={user.id} user={user} onEdit={handleEdit} />
          ))}
        </tbody>
      </table>

      <AddUserModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />

      <EditUserModal
        isOpen={!!editingUser}
        onClose={closeEditModal}
        user={editingUser}
      />
    </div>
  );
}

export default Table;
