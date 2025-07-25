import type React from "react";

const Sidebar: React.FC = () => {
    const items = ["Dashboard", "Tasks", "Calendar", "Teams", "Settings"];

    return (
        <div className="flex flex-col items-center bg-gray-300 gap-2 min-h-screen">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="w-full px-3 py-2 rounded hover:bg-gray-200  cursor-pointer text-black"
                >
                    {item}
                </div>
            ))}

        </div>
    )
}
export default Sidebar;