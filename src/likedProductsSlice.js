// import { createSlice } from "@reduxjs/toolkit";

// const likedProductsSlice = createSlice({
//   name: "likedProducts",
//   initialState: [],
//   reducers: {
//     toggleLike: (state, action) => {
//       const existingProductIndex = state.findIndex(
//         (p) => p.id === action.payload.id
//       );

//       if (existingProductIndex !== -1) {
//         // If product already exists, remove it
//         state.splice(existingProductIndex, 1);
//       } else {
//         // If product not exists, add it
//         state.push(action.payload);
//       }
//     },
//   },
// });

// export const { toggleLike } = likedProductsSlice.actions;
// export default likedProductsSlice.reducer;
