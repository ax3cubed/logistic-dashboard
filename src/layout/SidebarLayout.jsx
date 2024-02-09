import { useState } from "react";
import Sidebar from "../partials/Sidebar";
import { Outlet } from "react-router-dom";

const SidebarLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="h-screen flex overflow-hiddden ml-2">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="flex flex-col">
                CONTENT
                <Outlet />
            </div>
        </div>
    );
}
export default SidebarLayout;
