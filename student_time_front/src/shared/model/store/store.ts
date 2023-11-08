import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from "./slice/authSlice/authSlice";
// import userReducer from "./slice/userSlice/userSlice";
// import adsReducer from "./slice/adsSlice/adsSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  // user: userReducer,
  // ads: adsReducer,
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;