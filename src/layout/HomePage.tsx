import type React from "react";
import Sidebar from "./Sidebar";
import TaskBoard from "../pages/TaskBoard";
import { Button } from "@mantine/core";


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
                <div className="mt-2">
                 <Button variant="gradient" gradient={{ from: 'blue', to: 'lime', deg: 90 }}>Button</Button>
                 </div>
            </div>
        </div>
    )
}
export default HomePage