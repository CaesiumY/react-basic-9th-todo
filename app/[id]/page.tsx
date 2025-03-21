import { getTodoItem } from "@/api/todo-api";
import TodoDetail from "@/components/todo/TodoDetail";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Link from "next/link";

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

const DetailPage = async ({ params }: DetailPageProps) => {
  const { id } = await params;
  const queryClient = new QueryClient();
  const supabaseClient = await createClient();
  const todoId = Number(id);

  await queryClient.prefetchQuery({
    queryKey: ["todos", todoId],
    queryFn: () => getTodoItem(supabaseClient, todoId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section>
        <div className="container p-2 mx-auto space-y-4">
          <TodoDetail id={todoId} />

          <Link href="/">
            <Button className="w-full">돌아가기</Button>
          </Link>
        </div>
      </section>
    </HydrationBoundary>
  );
};

export default DetailPage;
