import {
    ADDED,
    ALLCOMPLETED,
    CLEARCOMPLETED,
    COLORSELECTED,
    DELETED,
    TOGGLED,
} from "./actionTypes";

const initialState = [
  {
    id: 1,
    text: "Use Redux",
    completed: false,
  },
  {
    id: 2,
    text: "Run the tests",
    completed: false,
    color: "red",
  },
];

const nextTodoId = (state) => {
  const maxId = state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return { ...todo, completed: !todo.completed };
      });
      
    case COLORSELECTED:
      return state.map((todo) => {
        if (todo.id !== action.payload.todoId) {
          return todo;
        }
        return {
          ...todo,
          color: action.payload.color,
        };
      });
    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case ALLCOMPLETED:
      return state.map((todo) => ({ ...todo, completed: true }));
    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default TodosReducer;
