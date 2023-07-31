import axios, { Axios, AxiosError } from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../../../models/IUser';
import AuthService from "../../../services/AuthService";
import { RootState } from "../../store"
import { AuthResponse } from "../../../models/response/AuthResponse";
import { API_URL } from "../../../network";

interface ValidationErrors {
  errorMessage: string
  feiled_errors:Record<string, string>
}

export const login = createAsyncThunk(
  'user/login', 
  async (userData: any, { rejectWithValue }) => {
    try {
      const { enteredEmail, enteredPassword } = userData;
      const response = await AuthService.login(enteredEmail, enteredPassword);

      localStorage.setItem('token', response.data.accessToken);

      return response.data.user;
    } catch (err: any) {
      const error: AxiosError<ValidationErrors> = err;
      if (!error.response) {
        throw err;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

export const checkAuth = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}refresh`, { withCredentials: true });

      localStorage.setItem('token', response.data.accessToken);

      return response.data.user;
    } catch (err: any) {
      console.log(err.message);
    }
  }
); 

export interface UserState {
  user: IUser,
  error: string;
}

const initialState: UserState = {
  user: {
    id: 0,
    email: '',
    role: ''
  },
  error: ''
};


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUserId: (state, action: PayloadAction<number>) => {
      state.user.id = action.payload;
    },
    clearErrorMessage: (state) => {
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(registration.fulfilled, (state, action) => {
    //   state.user = {
    //     ...state.user,
    //     ...action.payload
    //   };
    //   state.error = '';
    // });
    // builder.addCase(registration.rejected, (state, action: { payload:any }) => {
    //   state.error = action.payload.message;
    // });

    builder.addCase(login.fulfilled, (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload
      };
      state.error = '';
    });
    builder.addCase(login.rejected, (state, action: { payload:any }) => {
      state.error = action.payload.message;
    });

    // builder.addCase(logout.fulfilled, (state) => {
    //   state.user = {
    //     id: 0,
    //     email: '',
    //     role: ''
    //   } as IUser;
    // });
    // builder.addCase(checkAuth.fulfilled, (state, action) => {
    //   state.user = {
    //     ...state.user,
    //     ...action.payload
    //   };
    // });
  },
});

export const { addUserId, clearErrorMessage } = authSlice.actions;

export const selectUserId = (state: RootState) => state.auth.user.id;
export const selectUserEmail = (state: RootState) => state.auth.user.email;
export const selectUserRole = (state: RootState) => state.auth.user.role;
export const selectAuthError = (state: RootState) => state.auth.error;

export default authSlice.reducer;