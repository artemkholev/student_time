import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

import { IAboutUser } from "../../../models/IAboutUser";
import UserService from "../../../services/UserService";
import { RootState } from "../../store";

export const getUser = createAsyncThunk(
  'user/getUser',
  async (userData: any, { rejectWithValue }) => {
    try {
      const userId = userData;

      const response = await UserService.getUser(userId);

      return response.data;
    } catch (e:any) {
      rejectWithValue(e.response.data);
    }
  }
);
export interface UserState {
  user: IAboutUser;
}

const initialState: UserState = {
  user: {
    id: 0,
    name: '',
    lastName: '',
    email: '',
    role: ''
  }
};

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     addFirstName: (state, action: PayloadAction<string>) => {
//       state.user.name = action.payload;
//     },
//     addLastName: (state, action: PayloadAction<string>) => {
//       state.user.lastName = action.payload;
//     },
//     addEmail: (state, action: PayloadAction<string>) => {
//       state.user.email = action.payload;
//     },
//     addRole: (state, action: PayloadAction<string>) => {
//       state.user.role = action.payload;
//     }
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getUser.fulfilled, (state, action) => {
//       state.user = {
//         ...state.user,
//         ...action.payload
//       };
//     });
//   },
// });

// export const { addFirstName, addLastName, addEmail } = userSlice.actions;

// export const selectUserName = (state: RootState) => state.user.user.name;
// export const selectUserLastName = (state: RootState) => state.user.user.lastName;
// export const selectUserAge = (state: RootState) => state.user.user.age;
// export const selectUserEmail = (state: RootState) => state.user.user.email;
// export const selectRole = (state: RootState) => state.user.user.role;

// export default userSlice.reducer;