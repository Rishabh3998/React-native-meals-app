import { createSlice } from "@reduxjs/toolkit";

type ActionType = {
  payload: {
    id: string;
  };
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state: any, action: ActionType) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state: any, action: ActionType) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
