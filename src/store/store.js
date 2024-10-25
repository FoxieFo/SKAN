import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/reducers";
import { logging } from "./logging";

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logging),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;