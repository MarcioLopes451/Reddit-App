import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Containers/Login/SignUp/userSlice';


export const store = configureStore({
    reducer: {
        user: userReducer,
    }
})

