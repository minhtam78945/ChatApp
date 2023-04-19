import { Outlet, createBrowserRouter } from "react-router-dom";
import AuthProvider from "../context/AuthProvider";
import Login from "../Compontens/Login/Login";
import Room from "../Compontens/ChatRoom/Rom";
import Protected from "./Protected";
import ErrorPage from "./ErrorPage";
const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};
export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <Protected />,
        children: [
          {
            element: <Room />,
            path: "/",
          },
        ],
      },
    ],
  },
]);
