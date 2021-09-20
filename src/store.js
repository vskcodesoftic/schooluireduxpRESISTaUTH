import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: localStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  persistedReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

export const persistedStore = persistStore(store);
