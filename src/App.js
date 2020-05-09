import React from "react";

// Styling
import "./style/app.css";

// Components
import Router from "./router/Router";

// Redux
import { Provider } from "react-redux";
import myStore from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = myStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
