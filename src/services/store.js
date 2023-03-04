import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

// export const store = createStore(reducer);
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);

//   return { store, persistor };
// };
