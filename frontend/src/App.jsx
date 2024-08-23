import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Login from "./pages/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Message from "./pages/message/Message.jsx";
import Messages from "./pages/messages/Messages.jsx";
import MyGigs from "./pages/mygigs/MyGigs";
// import Otp from "./pages/verifyotp/Otp.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // useQuery

import Pay from "./pages/pay/Pay.jsx";
import Success from "./pages/Success/Success.jsx";
function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // {
        //   path: "/otp",
        //   element: <Otp />,
        // },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/pay/:id",
          element: <Pay />,
        },
        {
          path: "/success",
          element: <Success />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
