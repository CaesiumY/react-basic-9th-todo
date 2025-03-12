import TodoForm from "@/components/todo/TodoForm";
import TodoList from "@/components/todo/TodoList";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <div className="container p-2 mx-auto">
        <TodoForm />
        <TodoList />
      </div>
    </section>
  );
};

export default HomePage;
