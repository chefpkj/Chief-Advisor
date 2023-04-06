import React, { Children } from "react";
import { createRoot } from "react-dom/client";
import Body from "./component/Body";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import Login from "./component/Login";

const AppLayot=()=>{
    return (
        <div>
        <Outlet/>
        </div>
    )
}



const appRouter=createBrowserRouter([{
    path:"/",
    element:<AppLayot/>,
    children:[
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/home",
            element:<Body/>
        }
    ]
}])

const root=createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);