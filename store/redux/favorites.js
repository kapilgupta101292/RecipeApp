import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        ids: [],
    },
    reducers: {
        addFavorite: (state, action) => {
            console.log("addFavorite", action.payload.id);
            state.ids.push(action.payload.id);
        },
        removeFavorite: (state, action) => {
            console.log("removeFavorite", action.payload.id);
            state.ids = state.ids.filter((id) => id !== action.payload.id);
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;