import { getTodoItem, getTodos } from "@/api/todo-api";
import { FilterType } from "@/store/useTodoFilterStore";
import { Todo } from "@/types/todo.type";
import { useQuery } from "@tanstack/react-query";

export const useTodosQuery = (filter: FilterType) => {
  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(filter),
  });
};

export const useTodoItemQuery = (id: Todo["id"]) => {
  return useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodoItem(id),
  });
};
