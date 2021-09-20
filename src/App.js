import React , { useState } from "react";
import { IntlProvider } from "react-intl";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import { Provider } from "react-redux";
import { store, persistedStore } from "./store";

import messages from "./messages";

import { PersistGate } from "redux-persist/integration/react";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/scss/bootstrap.scss";
import "./App.scss";

import Layout from "./Layout";
import LoginPage from "./components/Teacher/Auth/Login/LoginPage";


function App() {
  const [locale, setLocale] = useState("en");
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
      <Router>
        <React.Fragment>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar
            newestOnTop
            closeOnClick
            transition={Slide}
          />
          <Route exact path="/" component={LoginPage} />

          <Route exact path="/layout">
            <IntlProvider locale={locale} messages={messages[locale]}>
              <Layout />
              </IntlProvider>
          </Route>

        </React.Fragment>
      </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;



