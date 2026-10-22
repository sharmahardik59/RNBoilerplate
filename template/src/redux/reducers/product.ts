import type { HomeData, ProductsData } from "@models/HomeData";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface ProductState {
  error: Error | null;
  isLoading: boolean;
  productDetail: null | ProductsData,
  productList: Array<HomeData>,
}

const initialState: ProductState = {
  error: null,
  isLoading: false,
  productDetail: null,
  productList: [],
};

const productSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    hasError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    setProductDetail: (state, action: PayloadAction<ProductsData>) => {
      state.productDetail = action.payload;
    },
    setProducts: (state, action: PayloadAction<Array<HomeData>>) => {
      state.productList = action.payload;
    },
  },
});

export const { hasError, setProductDetail, setProducts } = productSlice.actions;

export default productSlice.reducer;
