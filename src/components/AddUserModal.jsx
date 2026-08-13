import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/users/usersSlice";
import Modal from "./Modal";
import Button from "./Button";

const initialForm = {
  id: "",
  firstName: "",
  lastName: "",
  age: "",
  email: "",
  phone: "",
  city: "",
  profession: "",
  isMarried: false,
  salary: "",
  avatar: "",
};

function AddUserModal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);

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
      addUser({
        ...form,
        id: Number(form.id),
        age: Number(form.age),
        salary: Number(form.salary),
        avatar:
          form.avatar ||
          `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
      }),
    );

    setForm(initialForm);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Yangi foydalanuvchi qo'shish"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          name="id"
          type="number"
          value={form.id}
          onChange={handleChange}
          placeholder="ID"
          required
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
        />
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
          placeholder="Telefon raqami (+998...)"
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
          placeholder="Avatar rasm URL (ixtiyoriy)"
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
          <Button text="Qo'shish" variant="primary" />
        </div>
      </form>
    </Modal>
  );
}

export default AddUserModal;
