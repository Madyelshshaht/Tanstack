import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'



import "bootstrap/dist/css/bootstrap.min.css";

import Main from "./Layouts/Main"
import Home from "./pages/Home";
import Create from "./pages/Create";
import Info from "./pages/Info";

const basename = "/Tanstack/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/create",
        element: <Create />,
      },

      {
        path: "/info",
        element: <Info />,
      },
    ],
  },
],
  { basename }
);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)
