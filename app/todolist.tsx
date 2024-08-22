import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { deleteTodo, getTodoById, getTodos, updateTodo } from "./actions";
import TodoItem from "./todoItem";
import TodoForm from "./todoform";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<
    { id: string; name: string; description: string }[]
  >([]);
  const [editTodo, setEditTodo] = useState<{
    id: string;
    name: string;
    description: string;
  } | null>(null);
  const [searchId, setSearchId] = useState<string>("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await getTodos();
    setTodos(response.data);
  };

  const fetchTodoById = async () => {
    if (searchId) {
      const response = await getTodoById(searchId);
      setTodos([response.data]);
    }
  };

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
    fetchTodos();
  };

  const handleEdit = (todo: {
    id: string;
    name: string;
    description: string;
  }) => {
    setEditTodo(todo);
  };

  const handleUpdate = async (
    id: string,
    name: string,
    description: string
  ) => {
    await updateTodo(id, { name, description });
    setEditTodo(null);
    fetchTodos();
  };

  return (
    <div>
      {editTodo ? (
        <TodoForm
          initialData={editTodo}
          onSubmit={(name, description) =>
            handleUpdate(editTodo.id, name, description)
          }
        />
      ) : (
      todos.length > 0 ? (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              name={todo.name}
              description={todo.description}
              onEdit={() => handleEdit(todo)}
              onDelete={() => handleDelete(todo.id)}
            />
          ))
        ) : (
          <p>No todos available</p>
        )
      )}
      <div className="flex items-center mt-4 space-x-2">
        <Input
          placeholder="Search by ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <Button onClick={fetchTodoById}>Search</Button>
        {!editTodo && <Button onClick={fetchTodos}>Refresh</Button>}
      </div>
    </div>
  );
};

export default TodoList;