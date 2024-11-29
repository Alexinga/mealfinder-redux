import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDummyData } from "../../api/dummyData";

export const fetchProductData = createAsyncThunk(
  "shopUi/fetchProductData",
  async () => {
    const data = await getDummyData();
    return data;
  }
);

const initialState = {
  productData: [],
  isLoading: false,
  errMessage: "",
  id: "",
};

const shopUiSlice = createSlice({
  name: "shopUi",
  initialState,
  //reduant reducers if they are being handled by the extra reducers
  //   reducers: {
  //     loadingState(state) {
  //       state.isLoading = true;
  //     },
  //     errorState(state, action) {
  //       state.errMessage = action.payload;
  //     },
  //     productState(state, action) {
  //       state.productData = action.payload;
  //       state.isLoading = false;
  //       state.errMessage = "";
  //     },
  //   },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.isLoading = true;
        state.errMessage = "";
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productData = action.payload;
        state.errMessage = "";
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.isLoading = false;
        state.errMessage = action.payload;
      });
  },
});

// export const { loadingState, errorState } = shopUiSlice.actions;
export default shopUiSlice.reducer;
