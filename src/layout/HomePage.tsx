import type React from "react";
import Sidebar from "./Sidebar";
import TaskBoard from "../pages/TaskBoard";


const HomePage: React.FC = () => {
    return (
        <div className="h-full">

            <div className="grid grid-cols-12 gap-4 h-full">
                <div className="col-span-2">
                    <Sidebar />
                </div>
                <div className="col-span-9">
                    <TaskBoard />
                </div>
            </div>
        </div>
    )
}
export default HomePage