"use client";

import { useUserTodosQuery } from "@/query/useTodoQuery";
import { useTodoFilterStore } from "@/store/useTodoFilterStore";
import TodoItem from "./TodoItem";

const UserTodoList = () => {
  const { filter } = useTodoFilterStore();
  const { data: todos } = useUserTodosQuery(filter);

  if (!todos?.length) {
    return <p>No todos found.</p>;
  }

  return (
    <ul className="space-y-2">
      {todos?.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default UserTodoList;
