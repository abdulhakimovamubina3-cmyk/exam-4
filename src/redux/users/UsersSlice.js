import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../data/users";

const initialState = {
  users: users,
};

export const counterSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    deleteUser: () => {},
    addUser: () => {},
    editUser: () => {},
  },
});

export const { addUser, deleteUser, editUser } = usersSlice.actions;

export default usersSlice.reducers;
