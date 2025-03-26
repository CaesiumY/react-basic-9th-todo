import { FilterType } from "@/store/useTodoFilterStore";
import { Supabase, Todo } from "@/types/todo.type";
import { createClient } from "@/utils/supabase/client";

export type TodoWithAuthor = Awaited<ReturnType<typeof getTodos>>[number];

export const getTodos = async (supabase: Supabase, filter?: FilterType) => {
  const todoQuery = supabase
    .from("todos")
    .select(
      `
      id,
      title,
      completed,
      created_at,
      author(*)
      `
    )
    .order("created_at", { ascending: false });

  if (filter === "completed") {
    todoQuery.eq("completed", true);
  }

  const { data, error } = await todoQuery;

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export type TodoItemWithAuthor = Awaited<ReturnType<typeof getTodoItem>>;

export const getTodoItem = async (supabase: Supabase, id: Todo["id"]) => {
  const { data, error } = await supabase
    .from("todos")
    .select(
      `
      id,
      title,
      completed,
      created_at,
      author(*)
      `
    )
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const createTodo = async (title: Todo["title"]) => {
  const supabase = createClient();

  const { error } = await supabase.from("todos").insert({ title });

  if (error) {
    throw new Error(error.message);
  }
};

export const deleteTodo = async (id: Todo["id"]) => {
  const supabase = createClient();

  const { error } = await supabase.from("todos").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
};

export const toggleTodoCompleted = async (
  id: Todo["id"],
  completed: Todo["completed"]
) => {
  const supabase = createClient();

  const { error } = await supabase
    .from("todos")
    .update({ completed })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
};
