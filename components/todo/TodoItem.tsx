"use client";

import { TodoWithAuthor } from "@/api/todo-api";
import { cn } from "@/lib/utils";
import { useToggleTodoMutation } from "@/query/useTodoMutation";
import { CheckedState } from "@radix-ui/react-checkbox";
import Link from "next/link";
import { useId } from "react";
import { Checkbox } from "../ui/checkbox";
import TodoDeleteButton from "./TodoDeleteButton";

interface TodoItemProps {
  todo: TodoWithAuthor;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { mutate: toggleTodoCompleted } = useToggleTodoMutation();
  const { completed, id, title, author } = todo;
  const checkboxId = useId();

  const onCheckedChange = (checked: CheckedState) => {
    if (checked === "indeterminate") return;

    toggleTodoCompleted({ id, completed: checked });
  };

  return (
    <article className="flex flex-row items-center justify-between p-4 rounded-md border">
      <div className="flex flex-row gap-4 items-center">
        <Checkbox
          id={checkboxId}
          checked={completed}
          onCheckedChange={onCheckedChange}
        />
        <Link
          href={`/${id}`}
          className={cn("hover:underline", {
            "line-through": completed,
          })}
        >
          <h2>
            {title} ({author?.full_name ?? "익명"})
          </h2>
        </Link>
      </div>

      <div className="space-x-2">
        <TodoDeleteButton id={id} />
      </div>
    </article>
  );
};

export default TodoItem;
