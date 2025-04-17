import { configureStore } from '@reduxjs/toolkit';
import deliveriesReducer from '../src/features/deliveries/deliveriesSlice';
import deliveryModalSlice from '../src/features/deliveries/deliveryModalSlice'
export const store = configureStore({
  reducer: {
    deliveries: deliveriesReducer,
    deliveryModal: deliveryModalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
