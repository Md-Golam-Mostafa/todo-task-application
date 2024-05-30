import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import {
  added,
  allCompleted,
  clearCompleted,
} from "../redux/features/todos/actions";

export default function Header() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(added(input));
    setInput("");
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  const handleCompleteAll = () => {
    todos.forEach((todo) => { });
    dispatch(allCompleted());
  };
  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={handleSubmit}
      >
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
        >

        </button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          className="flex space-x-1 cursor-pointer"
          onClick={handleCompleteAll}
        >
          <img className="w-4 h-4" src={tickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={handleClearCompleted} className="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </div>
  );
}
