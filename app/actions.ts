import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getTodos = () => api.get("/");
export const getTodoById = (id: string) => api.get(`/${id}`);
export const createTodo = (data: { name: string; description: string }) =>
  api.post("/", data);
export const updateTodo = (
  id: string,
  data: { name: string; description: string }
) => api.put(`/${id}`, data);
export const deleteTodo = (id: string) => api.delete(`/${id}`);
