import { createStore } from 'redux';
import rootReducer from '../reducer/rootReducer';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState
  );
}
