import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
// import "normalize.css";
import "the-new-css-reset/css/reset.css";
import "./index.css";
import App from "./App.jsx";
import router from "./routes/main.jsx";
import Footer from "./components/Footer.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App>
        <RouterProvider router={router} />
      </App>
      <Footer />
    </Provider>
  </StrictMode>
);
