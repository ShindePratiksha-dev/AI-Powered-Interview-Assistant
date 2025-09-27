import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/store';

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);