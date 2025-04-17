import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const deliveryModalSlice = createSlice({
    name: "deliveryModal",
    initialState: {
        editOr: false,
    } as any,
    reducers: {
        setEditOr(state, action: PayloadAction<boolean>) {
            state.editOr = action.payload;
          },
    },
})

export const { setEditOr } = deliveryModalSlice.actions;
export default deliveryModalSlice.reducer;