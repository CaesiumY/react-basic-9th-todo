import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router";
import styled from "styled-components";
import TodoItem, { ActionButton } from "../components/todo/TodoItem";
import { TodoContext } from "../context/TodoContext";
import { useState } from "react";

const TodoDetailPage = () => {
  const [todo, setTodo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { getTodoById } = useContext(TodoContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchTodo = async () => {
      setIsLoading(true);

      const todoItemData = await getTodoById(id);
      setTodo(todoItemData);

      setIsLoading(false);
    };

    fetchTodo();
  }, [id, getTodoById]);

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  return (
    <DetailPageWrapper>
      {todo ? (
        <TodoItem id={todo.id} text={todo.text} completed={todo.completed} />
      ) : (
        <p>해당하는 데이터를 찾을 수 없습니다.</p>
      )}

      <BackLink to="/">
        <ActionButton $bgColor="#242424">돌아가기</ActionButton>
      </BackLink>
    </DetailPageWrapper>
  );
};

const DetailPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BackLink = styled(Link)`
  flex: 1;

  button {
    width: 100%;
  }
`;

export default TodoDetailPage;
