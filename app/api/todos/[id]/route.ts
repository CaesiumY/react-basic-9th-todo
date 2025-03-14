import { deleteTodo, toggleTodoCompleted } from "@/api/todo-api";
import { revalidatePath } from "next/cache";

export const DELETE = async (
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;

  await deleteTodo(id);

  revalidatePath("/");
  return Response.json({ revalidated: true, now: Date.now() });
};

export const PATCH = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const { completed } = await request.json();

  await toggleTodoCompleted(id, completed);

  revalidatePath("/");
  return Response.json({ revalidated: true, now: Date.now() });
};
