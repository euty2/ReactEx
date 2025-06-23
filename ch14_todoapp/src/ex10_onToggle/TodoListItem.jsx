import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
} from "react-icons/md";
import "./TodoListItem.scss";
import cn from "classnames";

const TodoListItem = (props) => {
  const { todo, onRemove, onToggle } = props;
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      {/* checked가 true면 checkbox클래스가 적용되고, false면 checkbox가 적용되지 않음 */}
      <div className={cn("checkbox", { checked })} onClick={()=>onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={()=>onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
