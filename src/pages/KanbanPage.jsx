import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";

export default function KanbanPage() {
  const [tasks, setTasks] = useState({
    todo: ["Movie Approval"],
    progress: ["Seat Layout Update"],
    done: ["Ticket Pricing"]
  });

  return (
 <DragDropContext onDragEnd={() => {}}>
      <div className="grid md:grid-cols-3 gap-6">
        {Object.keys(tasks).map((col) => (
          <Droppable droppableId={col} key={col}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className="bg-gray-200 p-4 rounded-xl">
                <h2 className="font-bold mb-4">{col}</h2>
                {tasks[col].map((task, i) => (
                  <Draggable key={task} draggableId={task} index={i}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-white p-3 rounded mb-2 shadow"
                      >
                        {task}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}
