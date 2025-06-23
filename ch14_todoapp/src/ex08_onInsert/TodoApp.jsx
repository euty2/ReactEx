import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import { useState, useRef, useCallback } from "react";

const TodoApp = (props) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트의 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링 해보기",
      checked: true,
    },
    {
      id: 3,
      text: "일정 관리 앱 만들어 보기",
      checked: false,
    },
  ]);

  const nextId = useRef(todos.length+1);  // 4가 초기값이 된다.

  // <TodoInsert>자식 컴포넌트에 전달해서, 자식이 보내주는 text를 todos에 저장한다.
  const onInsert = useCallback((text)=>{
    const todo = {
      id: nextId.current,
      text,
      checked: false
    };
    const nextTodos = [...todos];
    nextTodos.push(todo);
    setTodos(nextTodos);
    nextId.current += 1;    // nextId를 1증가, useRef도 Hook이므로 Re-Rendering
  }, [todos]);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default TodoApp;
