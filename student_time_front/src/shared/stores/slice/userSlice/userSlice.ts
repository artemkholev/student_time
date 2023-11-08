import { IAboutUser } from './../../../api/network/models';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import UserService from "../../../api/network/tasks/UserService";
import { RootState } from "../../store";
import { AxiosError } from 'axios';

interface ValidationErrors {
  errorMessage: string
  field_errors: Record<string, string>
}

export const getUserInfo = createAsyncThunk(
  'users/info',
  async () => {
    try {
      const response = await UserService.getUser();
      console.log(response.data);
      return response.data;
    } catch (err:any) {
      const error: AxiosError<ValidationErrors> = err;
      if (!error.response) {
        throw err;
      }
    }
  }
);
export interface UserState {
  user: IAboutUser;
}

// const initialState: UserState = {
//   user: {
//     id: 0,
//     email: '',
//     role: '',
//   }
// };

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
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

// export const { addEmail } = userSlice.actions;
// // export const selectUserEmail = (state: RootState) => state.user.user.email;
// // export const selectRole = (state: RootState) => state.user.user.role;

// export default userSlice.reducer;