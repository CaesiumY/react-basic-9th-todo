"use client";

import { useUserTodosQuery } from "@/query/useTodoQuery";
import { useTodoFilterStore } from "@/store/useTodoFilterStore";
import TodoItem from "./TodoItem";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const UserTodoList = () => {
  const { filter } = useTodoFilterStore();
  const { data: todos } = useUserTodosQuery(filter);
  const [parent] = useAutoAnimate();

  if (!todos?.length) {
    return <p>No todos found.</p>;
  }

  return (
    <ul ref={parent} className="space-y-2">
      {todos?.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default UserTodoList;
