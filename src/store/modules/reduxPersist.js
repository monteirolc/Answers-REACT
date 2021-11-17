import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'QUESTIONS-BASE',
      storage,
      whitelist: ['questions'],
    },
    reducers
  );
  return persistedReducer;
};
