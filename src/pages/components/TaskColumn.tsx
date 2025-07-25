import { useDroppable } from "@dnd-kit/core";
import type React from "react";
import { TaskCard } from "./TaskCard";
import type { Column, Task } from "./types";

type ColumnProps = {
  column: Column;
  tasks: Task[];
};

const TaskColumn: React.FC<ColumnProps> = ({ column, tasks }) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div className="flex w-80 flex-col rounded-lg bg-neutral-800 p-4">
      <h4 className="mb-4 text-white">{column.title}</h4>
      <div ref={setNodeRef} className="flex flex-1 flex-col gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
