import React from "react";
import Button from "@material-ui/core/Button";
import Routes from "./components/modules/Routes";
import Navbar from "./components/Navbar";
import configureStore from "./store";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Main from "./components/modules/Main";

const App = () => {
  const storage = configureStore();
  return (
    <>
      <h1>Support Wheel Of Fate</h1>
      <Provider store={storage.store}>
        <PersistGate loading={null} persistor={storage.persistor}>
          <Main />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
