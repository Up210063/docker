import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
      status: 'unauthorized', // 'unauthorized'
      user: {
        email: 'D'
      }
    },
    reducers: {

      login: ( state, { payload } ) => {
        state.status = 'authorized';
        state.user = payload;
      },

      logout: ( state, { payload } ) => {
        state.status = 'unauthorized';
        state.user = {
          email: 'D'
        }
      }

    }
})

export const { login, logout } = authSlice.actions;
