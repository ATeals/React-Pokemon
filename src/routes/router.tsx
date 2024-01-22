import App from "@/App";
import { PATH } from "@/constant";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <App />,
    children: [],
  },
]);
