import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../redux/users/usersSlice";
import Modal from "./Modal";
import Button from "./Button";

function EditUserModal({ isOpen, onClose, user }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState(user);

  // Modal ochilganda tanlangan user ma'lumotlari bilan formani to'ldirish
  useEffect(() => {
    if (user) setForm(user);
  }, [user]);

  if (!form) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      editUser({
        ...form,
        age: Number(form.age),
        salary: Number(form.salary),
      }),
    );

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Foydalanuvchini tahrirlash">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="Ism"
          required
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
        />
        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Familiya"
          required
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
        />
        <input
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          placeholder="Yosh"
          required
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Telefon raqami"
          required
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
        />
        <input
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="Shahar"
          required
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
        />
        <input
          name="profession"
          value={form.profession}
          onChange={handleChange}
          placeholder="Kasbi"
          required
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
        />
        <input
          name="salary"
          type="number"
          value={form.salary}
          onChange={handleChange}
          placeholder="Maosh"
          required
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
        />
        <input
          name="avatar"
          value={form.avatar}
          onChange={handleChange}
          placeholder="Avatar rasm URL"
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
        />

        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            name="isMarried"
            checked={form.isMarried}
            onChange={handleChange}
            className="h-4 w-4"
          />
          Turmush qurgan
        </label>

        <div className="mt-2 flex justify-end gap-2">
          <Button text="Bekor qilish" variant="secondary" onClick={onClose} />
          <Button text="Saqlash" variant="primary" />
        </div>
      </form>
    </Modal>
  );
}

export default EditUserModal;
