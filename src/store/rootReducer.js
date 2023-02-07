import { combineReducers } from 'redux';
import { persistReducer, purgeStoredState } from 'redux-persist';
import AsyncStorage        from '@react-native-async-storage/async-storage';
import { auth }            from './auth/auth.reducers';
import { dash }            from './dash/dash.reducers';
import { device }          from './device/device.reducers';

const storage = AsyncStorage;

const persistConfig = {
  key: 'root',
  storage,
};

const authConfig = {
  key: 'auth',
  storage,
};

const dashConfig = {
  key: 'dash',
  storage,
};

const deviceConfig = {
  key: 'device',
  storage,
};

const rootReducer = combineReducers({
  auth:     persistReducer(authConfig, auth),
  dash:     persistReducer(dashConfig, dash),
  device:   persistReducer(deviceConfig, device),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const purgeStore = () => {
  purgeStoredState(persistConfig);
};

export default persistedReducer;
