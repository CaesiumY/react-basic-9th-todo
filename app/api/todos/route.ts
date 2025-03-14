import { createTodo, getTodos } from "@/api/todo-api";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async () => {
  const todos = await getTodos();

  return NextResponse.json(todos);
};

export const POST = async (request: Request) => {
  const { text } = await request.json();

  await createTodo(text);

  revalidatePath("/");
  return Response.json({ revalidated: true, now: Date.now() });
};
