import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3001/deliveries";
// const API_URL= process.env.REACT_APP_API_URL

export const fetchDeliveries = createAsyncThunk(
  "deliveries/fetchAll",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

export const createDelivery = createAsyncThunk(
  "deliveries/create",
  async (newDelivery) => {
    const response = await axios.post(API_URL, newDelivery);
    return response.data;
  }
);

export const updateDelivery = createAsyncThunk(
  "deliveries/update",
  async (updatedDelivery) => {
    const response = await axios.put(
      `${API_URL}/${updatedDelivery.id}`,
      updatedDelivery
    );
    return response.data;
  }
);

export const deleteDelivery = createAsyncThunk(
  "deliveries/delete",
  async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

const deliveriesSlice = createSlice({
  name: "deliveries",
  initialState: {
    rows: [],
    status: "idle",
    error: null,
    statusCounts: {},
  } as any,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeliveries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDeliveries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rows = action.payload;

        const counts: Record<string, number> = {};
        action.payload.forEach((delivery: any) => {
          const status = delivery.status || "Unknown";
          counts[status] = (counts[status] || 0) + 1;
        });

        state.statusCounts = counts;
      })
      .addCase(fetchDeliveries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createDelivery.fulfilled, (state, action) => {
        state.rows.push(action.payload);
      })
      .addCase(updateDelivery.fulfilled, (state, action) => {
        const index = state.rows.findIndex(
          (item: any) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.rows[index] = action.payload;
        }
      })
      .addCase(deleteDelivery.fulfilled, (state, action) => {
        state.rows = state.rows.filter(
          (delivery: any) => delivery.id !== action.payload
        );
      });
  },
});

export default deliveriesSlice.reducer;
