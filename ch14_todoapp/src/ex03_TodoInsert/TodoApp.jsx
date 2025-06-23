import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";

const TodoApp = (props) => {
  return (
    <TodoTemplate>
      <TodoInsert />
      <div>TodoList</div>
    </TodoTemplate>
  );
};

export default TodoApp;
