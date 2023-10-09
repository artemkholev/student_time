import axios, { AxiosError } from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../models/IUser';
import AuthService from '../../../services/AuthService';
import { AuthResponse } from '../../../models/response/AuthResponse';
import { API_URL } from '../../../network';
import { RootState } from '../../store';

interface ValidationErrors {
  errorMessage: string
  field_errors: Record<string, string>
}

export const registration = createAsyncThunk(
  '/auth/register',
  // eslint-disable-next-line consistent-return
  async (userData: any, { rejectWithValue }) => {
    try {
      const { userInput } = userData;
      console.log(userInput);
      const response = await AuthService.registration(userInput.email, userInput.password, "USER");
      localStorage.setItem('token', response.data.accessToken);
      return response.data.user;
    } catch (err:any) {
      const error: AxiosError<ValidationErrors> = err;
      if (!error.response) {
        throw err;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  '/auth/authenticate',
  // eslint-disable-next-line consistent-return
  async (userData: any, { rejectWithValue }) => {
    try {
      const { userInput } = userData;
      console.log(userInput);
      const response = await AuthService.login(userInput.email , userInput.password);
      localStorage.setItem('token', response.data.accessToken);
      return response.data.user;
    } catch (err:any) {
      const error: AxiosError<ValidationErrors> = err;
      if (!error.response) {
        throw err;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk(
  '/auth/logout',
  // eslint-disable-next-line consistent-return
  async () => {
    try {
      await AuthService.logout();

      localStorage.removeItem('token');
    } catch (e:any) {
      console.log(e.message);
    }
  }
);

export const refresh = createAsyncThunk(
  '/auth/refresh',

  // eslint-disable-next-line consistent-return
  async () => {
    try {
      const response = await axios.post<AuthResponse>('/auth/refresh', { withCredentials: true });

      localStorage.setItem('token', response.data.accessToken);

      return response.data.user;
    } catch (err:any) {
      console.log(err.message);
    }
  }
);

export interface UserState {
  user: IUser,
  error: string
}

const initialState: UserState = {
  user: {
    isAuth: false,
    role: ''
  },
  error: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearErrorMessage: (state) => {
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registration.fulfilled, (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload
      };
      state.error = '';
    });
    builder.addCase(registration.rejected, (state, action: { payload:any }) => {
      state.error = action.payload.message;
    });
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
    builder.addCase(logout.fulfilled, (state) => {
      state.user = {
        isAuth: false,
        role: ''
      } as IUser;
    });
    builder.addCase(refresh.fulfilled, (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload
      };
    });
  },
});

export const { clearErrorMessage } = authSlice.actions;

export const selectUserIsAuth = (state: RootState) => state.auth.user.isAuth;
export const selectUserRole = (state: RootState) => state.auth.user.role;
export const selectAuthError = (state: RootState) => state.auth.error;

export default authSlice.reducer;