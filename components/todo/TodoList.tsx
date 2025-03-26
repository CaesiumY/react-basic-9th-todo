"use client";

import React from "react";
import TodoItem from "./TodoItem";
import { useTodosQuery } from "@/query/useTodoQuery";
import { useTodoFilterStore } from "@/store/useTodoFilterStore";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const TodoList = () => {
  const { filter } = useTodoFilterStore();
  const { data: todos } = useTodosQuery(filter);
  const [parent] = useAutoAnimate();

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

export default TodoList;
