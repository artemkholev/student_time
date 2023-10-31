import axios, { AxiosError } from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import AuthService from '../../../../../processes/AuthService';
import apiAxios, { API_URL } from '../../../../api/network';
import { RootState } from '../../store';
import { IUser } from '../../../../../models/IUser';
import { accessTokenResponse } from '../../../../../models/response/accessTokenResponse';

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
      const response = await AuthService.registration(userInput.email, userInput.password, "USER");
      localStorage.setItem('token', response.data.accessToken);
      return { isAuth: true, userRole: response.data.userRole };
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
      const response = await AuthService.login(userInput.email , userInput.password);
      localStorage.setItem('token', response.data.accessToken);
      return   { isAuth: true, userRole: response.data.userRole };
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
      const response = await apiAxios.post<accessTokenResponse>('/auth/refresh');
      localStorage.setItem('token', response.data.accessToken);
      return {isAuth: true};
    } catch (err: any) {
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
    userRole: ''
  },
  error: ''
};

export const authSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    addUserIsAuth: (state, action: PayloadAction<boolean>) => {
      state.user.isAuth = action.payload;
    },
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
        userRole: ''
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

export const { addUserIsAuth, clearErrorMessage } = authSlice.actions;

export const selectUserIsAuth = (state: RootState) => state.auth.user.isAuth;
export const selectUserRole = (state: RootState) => state.auth.user.userRole;
export const selectAuthError = (state: RootState) => state.auth.error;

export default authSlice.reducer;