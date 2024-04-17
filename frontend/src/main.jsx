import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import NewContext from "./context/NewContext.js";


const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  return (
    <NewContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
      }}
    >
      <App />
    </NewContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);