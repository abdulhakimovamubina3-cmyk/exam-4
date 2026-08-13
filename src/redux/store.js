import { configureStore } from "@reduxjs/toolkit";

import  UserReducer  from "./users/UsersSlice";
import { users } from "../data/users";

export const store = configureStore({
  reducer: {
    users: UserReducer,
  },
});
