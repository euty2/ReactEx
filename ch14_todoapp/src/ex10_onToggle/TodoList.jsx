import "./TodoList.scss";
import TodoListItem from "./TodoListItem";

const TodoList = (props)=>{
    const { todos, onRemove, onToggle } = props;

    return(
        <div className="TodoList">
            {todos.map((todo)=><TodoListItem todo={todo} key={todo.id} 
                                onRemove={onRemove} onToggle={onToggle} />)}
        </div>
    )
}

export default TodoList;