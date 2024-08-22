"use client";
import { Input } from "@/components/ui/input";
import TodoForm from "./todoform";
import TodoList from "./todolist";
import { createTodo } from "./actions";

export default function Home() {
  const handleCreateTodo = async (name: string, description: string) => {
    await createTodo({ name, description });
  };
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Todo List</h1>
      <TodoForm onSubmit={handleCreateTodo} />
      <TodoList />
    </div>
  );
}
