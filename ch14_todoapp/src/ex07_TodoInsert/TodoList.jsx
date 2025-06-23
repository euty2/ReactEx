import "./TodoList.scss";
import TodoListItem from "./TodoListItem";

const TodoList = (props)=>{
    const { todos } = props;

    return(
        <div className="TodoList">
            {todos.map((todo)=><TodoListItem todo={todo} key={todo.id} />)}
        </div>
    )
}

export default TodoList;