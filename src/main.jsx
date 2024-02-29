import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./pages/Layout.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Surahs from "./pages/Surahs.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Surah from "./pages/Surah.jsx";

const router = createBrowserRouter([
    {
        path: "/Quran/",
        element: <App />,
        children: [
            {
                path: "/Quran/",
                element: <Layout />,
                children: [
                    {
                        path: "/Quran/",
                        element: <Main />,
                    },
                    {
                        path: "/Quran/surahs",
                        element: <Surahs />,
                    },
                    {
                        path: "/Quran/surahs/:number",
                        element: <Surah />,
                    },
                ],
            },
        ],
    },
]);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>
);
