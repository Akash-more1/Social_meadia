import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './reducers';
import { thunk } from 'redux-thunk';

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
