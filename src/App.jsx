import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import { SearchProvider } from "./Context/SearchContext";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FirstPage />,
    },
    {
      path: "/second",
      element: <SecondPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
