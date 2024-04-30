import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createHashRouter, RouterProvider } from "react-router-dom";
import WhatIs from "./Posts/WhatIs";
import QueryEngine from "./Posts/QueryEngine";

const router = createHashRouter([{
    path: "/",
    element: <App />,
    children: [{
        path: "/",
        element: <WhatIs />,
    }, {
        path: "/query-engine",
        element: <QueryEngine />,
    }],
    errorElement: <div className="p-10">Wrong Route</div>,
}]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
