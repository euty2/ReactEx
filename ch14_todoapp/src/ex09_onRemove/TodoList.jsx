import "./TodoList.scss";
import TodoListItem from "./TodoListItem";

const TodoList = (props)=>{
    const { todos, onRemove } = props;

    return(
        <div className="TodoList">
            {todos.map((todo)=><TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />)}
        </div>
    )
}

export default TodoList;