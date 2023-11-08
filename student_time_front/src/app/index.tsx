import React, {useEffect} from "react"

import { useAppDispatch } from '../shared/lib/hooks/storeHooks';
import { refresh } from '../shared/stores/slice/authSlice/authSlice';
import { Routing } from "../pages";
import { withProviders } from "./providers";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(refresh());
    }
  }, []);

  return (
    <div className="app">
      <Routing />
    </div>
  );
}

export default withProviders(App);