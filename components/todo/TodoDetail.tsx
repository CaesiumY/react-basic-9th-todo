"use client";

import { useTodoItemQuery } from "@/query/useTodoQuery";
import TodoItem from "./TodoItem";
import LoadingIndicator from "../LoadingIndicator";

interface TodoDetailProps {
  id: string;
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
