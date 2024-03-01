// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   count: 0, //initial default value
// };

// export const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   //the object below has everything that touches your state with actions and reducers that modify it
//   reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.count += 1;
//     },
//     decrement: (state) => {
//       state.count -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.count += action.payload;
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginModalOpen: false, // Initial state: Login modal closed
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  //the object below has everything that touches your state with actions and reducers that modify it
  reducers: {
    //we create the actions
    toggleLoginModal(state) {
      //this line is an action that is named toggleLoginModal
      //the initial state what we need to set it to
      state.isLoginModalOpen = !state.isLoginModalOpen; // Toggle visibility
    },
  },
});

export const { toggleLoginModal } = userSlice.actions;

export default userSlice.reducer;
