import { useEffect, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import { supabase } from "../../lib/supabaseClient";

const TODO_TABLE = "todos";
const STORAGE_BUCKET = "todo-images";

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);

  const getTodos = async () => {
    const { data } = await supabase.from(TODO_TABLE).select();

    setTodos(data);
  };

  const getTodoById = async (id) => {
    const { data } = await supabase
      .from(TODO_TABLE)
      .select()
      .eq("id", id)
      .single();

    setCurrentTodo(data);
    return data;
  };

  const uploadImage = async (file) => {
    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `public/${fileName}`;

      console.log("🚀 ~ uploadImage ~ filePath:", filePath);
      const { error } = await supabase.storage
        .from(STORAGE_BUCKET)
        .upload(filePath, file);

      if (error) throw error;

      const { data: publicUrl } = supabase.storage
        .from(STORAGE_BUCKET)
        .getPublicUrl(filePath);

      return publicUrl.publicUrl;
    } catch (error) {
      console.error("이미지 업로드 에러:", error);
      throw error;
    }
  };

  const addTodos = async (text, imageFile) => {
    try {
      let imageUrl = null;
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }
      console.log("🚀 ~ addTodos ~ imageUrl:", imageUrl);

      await supabase.from(TODO_TABLE).insert({
        text,
        // image_url: imageUrl,
      });

      await getTodos();
    } catch (error) {
      console.error("Todo 추가 에러:", error);
      throw error;
    }
  };

  const toggleTodoCompleted = async (id, currentCompleted) => {
    await supabase
      .from(TODO_TABLE)
      .update({ completed: !currentCompleted })
      .eq("id", id);

    await getTodos();
  };

  const deleteTodo = async (id) => {
    await supabase.from(TODO_TABLE).delete().eq("id", id);

    await getTodos();
  };

  const getFilteredTodos = (selectedFilter) => {
    if (selectedFilter === "completed") {
      return todos.filter((todo) => todo.completed);
    }

    if (selectedFilter === "pending") {
      return todos.filter((todo) => !todo.completed);
    }

    return todos;
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos,
        currentTodo,
        addTodos,
        toggleTodoCompleted,
        deleteTodo,
        getFilteredTodos,
        getTodoById,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
