"use client";

import { useTodoItemQuery } from "@/query/useTodoQuery";
import TodoItem from "./TodoItem";
import LoadingIndicator from "../LoadingIndicator";
import { Todo } from "@/types/todo.type";

interface TodoDetailProps {
  id: Todo["id"];
}

const TodoDetail = ({ id }: TodoDetailProps) => {
  const { data: todo } = useTodoItemQuery(id);

  if (!todo) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      <TodoItem todo={todo} />
    </div>
  );
};

export default TodoDetail;
