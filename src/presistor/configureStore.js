// configureStore.js

import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from '../reducers/rootReducer'
import logger from 'redux-logger';

import thunk from "redux-thunk";

const persistConfig = {
    key: 'authType',
    storage: storage,
    whitelist: ['authType'] // which reducer want to store
  };
  
  const pReducer = persistReducer(persistConfig, rootReducer);
  const middleware = applyMiddleware(thunk, logger);
  const store = createStore(pReducer, middleware);
  const persistor = persistStore(store);

  export { persistor, store };
  