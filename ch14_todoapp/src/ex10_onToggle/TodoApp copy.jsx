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

  const nextId = useRef(todos.length + 1); // 4가 초기값이 된다.

  // <TodoInsert>자식 컴포넌트에 전달해서, 자식이 보내주는 text를 todos에 저장한다.
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      const nextTodos = [...todos];
      nextTodos.push(todo);
      setTodos(nextTodos);
      nextId.current += 1; // nextId를 1증가, useRef도 Hook이므로 Re-Rendering
    },
    [todos]
  );

  // 자식이 보내온 id를 제외한 나머지를 todos에 다시 배열로 저장하라
  const onRemove = useCallback(
    (id) => setTodos(todos.filter((todo) => todo.id !== id)),
    [todos]
  );

  // 이 함수는 특정 todo 항목의 체크 여부를 토글(toggle)하는 역할을 해요
  const onToggle = useCallback(
    (id) => {
      // 기존 todos 배열을 기반으로 새로운 배열을 만듭니다
      const updatedTodos = todos.map((todo) => {
        // 만약 현재 반복 중인 todo의 id가 전달받은 id와 같다면
        if (todo.id === id) {
          // 해당 항목의 checked 값을 true ↔ false로 뒤집습니다
          return {
            ...todo, // 기존 todo의 나머지 속성은 그대로 복사하고
            checked: !todo.checked, // checked만 반대로 바꿔요
          };
        } else {
          // id가 일치하지 않으면 그대로 반환
          return todo;
        }
      });

      // 새로운 배열로 todos 상태를 업데이트합니다
      setTodos(updatedTodos);
    },
    [todos]
  ); // todos 배열이 바뀔 때마다 이 함수가 새로 생성돼요

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default TodoApp;
