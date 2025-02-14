import { Link, useParams } from "react-router";
import TodoItem, { ActionButton } from "../components/todo/TodoItem";
import { SAMPLE_TODOS } from "../constants/sample-todos";
import styled from "styled-components";

const TodoDetailPage = () => {
  const { id } = useParams();

  const targetTodoItem = SAMPLE_TODOS.find((todo) => todo.id === id);

  return (
    <DetailPageWrapper>
      <TodoItem
        id={targetTodoItem.id}
        text={targetTodoItem.text}
        completed={targetTodoItem.completed}
      />

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
