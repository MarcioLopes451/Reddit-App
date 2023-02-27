import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'session',
    initialState: {
        user: {},
        isLoggedIn: false
    },
    reducers: {
        signUp: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        logIn: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true
        },
        logOut: (state) => {
            state.user = {};
            state.isLoggedIn = false
        }
    }
})

export const selectCurrentUser = (state) => state.user.user;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const {signUp, logIn, logOut} = userSlice.actions;
export default userSlice.reducer;