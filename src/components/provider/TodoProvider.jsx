import { useEffect, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import { supabase } from "../../lib/supabaseClient";

const TODO_TABLE = "todos";

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

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

    return data;
  };

  const addTodos = async (text) => {
    await supabase.from(TODO_TABLE).insert({ text });

    await getTodos(); // 새로운 todo를 추가하면 최신 데이터를 불러옴
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
