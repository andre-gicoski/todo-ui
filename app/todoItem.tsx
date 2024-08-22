import { Button } from "@/components/ui/button";
import React from "react";

type TodoItemProps = {
  id: string;
  name: string;
  description: string;
  onEdit: () => void;
  onDelete: () => void;
};

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  name,
  description,
  onEdit,
  onDelete,
}) => (
  <div className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
    <div>
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
    <div>
      <Button onClick={onEdit} className="mr-2">
        Edit
      </Button>
      <Button variant="destructive" onClick={onDelete}>
        Delete
      </Button>
    </div>
  </div>
);

export default TodoItem;
