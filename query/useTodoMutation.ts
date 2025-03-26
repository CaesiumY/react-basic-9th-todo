import { createTodo, deleteTodo, toggleTodoCompleted } from "@/api/todo-api";
import { Todo } from "@/types/todo.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      toast.success("할 일이 추가되었습니다.");
    },
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  const { replace } = useRouter();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      toast.success("할 일이 삭제되었습니다.");
      replace("/");
    },
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};

interface ToggleTodoMutationParams {
  id: Todo["id"];
  completed: Todo["completed"];
}

export const useToggleTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, completed }: ToggleTodoMutationParams) =>
      toggleTodoCompleted(id, completed),
    onSuccess: () => {
      toast.success("할 일이 업데이트되었습니다.");
    },
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
};
