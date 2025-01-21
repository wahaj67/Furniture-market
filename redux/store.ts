// store.ts
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Default: Local Storage
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import cartReducer from "./CartSlice";

// Redux Persist Config
const persistConfig = {
  key: "root",
  storage,
};

// Root Reducer
const rootReducer = combineReducers({
  cart: cartReducer,
});

// Persist Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable Serializable Warnings
    }),
});

export const persistor = persistStore(store);
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;