import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        asideMenu: {
            isOpen: false,
        }
    },
    reducers: {

        setAsideMenu: ( state, { payload } ) => {
            state.asideMenu = payload;
        }

    }
})

export const {
    setAsideMenu,
} = uiSlice.actions;