import type React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
    const navigate = useNavigate()
    const items = [{ name: "Dashboard", path: "/dashboard" }, {
        name: "Tasks", path: "/"
    }, { name: "Calendar", path: "/calendar" }, { name: "Teams", path: "/teams" }, { name: "Settings", path: "/settings" }];



    return (
        <div className="flex flex-col items-center bg-gray-300 gap-2 min-h-screen" >
            {
                items.map((item, index) => (
                    <div
                        key={index}
                        className="w-full px-3 py-2 rounded hover:bg-gray-200  cursor-pointer text-black"
                        onClick={() => navigate(item?.path)}
                    >
                        {item?.name}
                    </div>
                ))
            }

        </div >
    )
}
export default Sidebar;