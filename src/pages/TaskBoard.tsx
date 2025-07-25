import type React from "react";
import { useState } from "react";
import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import type { Column, Task } from "./components/types";
import TaskColumn from "./components/TaskColumn";



const COLUMNS: Column[] = [
    { id: 'TODO', title: 'To Do' },
    { id: 'IN_PROGRESS', title: 'In Progress' },
    { id: 'DONE', title: 'Done' },
];

const INITIAL_TASKS: Task[] = [
    {
        id: '1',
        title: 'Recat Js',
        description: 'Recat Js documentation',
        status: 'TODO',
    },
    {
        id: '2',
        title: 'CSS',
        description: 'Css component library ',
        status: 'TODO',
    },
    {
        id: '3',
        title: 'Design',
        description: 'design',
        status: 'IN_PROGRESS',
    },
    {
        id: '4',
        title: 'Done',
        description: 'done',
        status: 'DONE',
    },
];


const TaskBoard: React.FC = () => {


    const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (!over) return;

        const taskId = active.id as string;
        const newStatus = over.id as Task['status'];

        setTasks(() =>
            tasks.map((task) =>
                task.id === taskId
                    ? {
                        ...task,
                        status: newStatus,
                    }
                    : task,
            ),
        );
    }
    return (
        <div className="p-3">
            <div className="flex h-full gap-3">
            <DndContext onDragEnd={handleDragEnd}>
                {COLUMNS.map((column) => {
                    return (
                        <TaskColumn
                            key={column.id}
                            column={column}
                            tasks={tasks.filter((task) => task.status === column.id)}
                        />
                    );
                })}
            </DndContext>
            </div>
        </div>
    )
}
export default TaskBoard