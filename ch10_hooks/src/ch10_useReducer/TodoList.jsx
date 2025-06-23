import React, { useReducer, useState, useEffect } from 'react';

// 초기 상태 로딩 함수 (로컬스토리지에서)
const init = () => {
  const stored = localStorage.getItem('todos');
  return stored ? JSON.parse(stored) : [];
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, [], init); // 초기값 함수로 전달
  const [text, setText] = useState('');

  // 상태가 바뀔 때마다 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: 'ADD', payload: text });
      setText('');
    }
  };

  return (
    <div>
      <h2>📌 로컬스토리지 연동 To-Do</h2>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>추가</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
            <span onClick={() => dispatch({ type: 'TOGGLE', payload: todo.id })}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'REMOVE', payload: todo.id })}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;