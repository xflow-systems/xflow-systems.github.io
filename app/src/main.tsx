import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createHashRouter, RouterProvider } from "react-router-dom";
import WhatIs from "./Posts/WhatIs";

const router = createHashRouter([{
    path: "/",
    element: <App />,
    children: [{
        path: "/",
        element: <WhatIs />,
    }],
    errorElement: <div>Wrong Route</div>,
}]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
