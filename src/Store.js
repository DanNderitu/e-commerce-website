// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./LoginReducer";
//import likedProductsReducer from "./likedProductsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    //likedProducts: likedProductsReducer,
  },
});

export default store;
