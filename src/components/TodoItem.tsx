import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/TodoAtoms";

export function TodoItem({item}:any) {
    const [todoList, setTodoList] = useRecoilState<any>(todoListState);
    const index = todoList.findIndex((listItem:any) => listItem === item);
  
    const editItemText = ({target: {value}}:any) => {
      const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        text: value,
      });
 
      setTodoList(newList);
    };
  
    const toggleItemCompletion = () => {
      const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        isComplete: !item.isComplete,
      });
  
      setTodoList(newList);
    };
  
    const deleteItem = () => {
      const newList = removeItemAtIndex(todoList, index);
  
      setTodoList(newList);
    };
  
    return (
      <div className="mt-2">
        <input type="text" value={item.text} onChange={editItemText} />
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={toggleItemCompletion}
        />
        <button onClick={deleteItem}>X</button>
      </div>
    );
  }
  
  function replaceItemAtIndex(arr:any, index:any, newValue:any) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
  
  function removeItemAtIndex(arr:any, index:any) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }