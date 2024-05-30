import { combineReducers } from "redux";
import filtersReducer from "./filters/reducer";
import TodosReducer from "./todos/reducer";

const rootReducer = combineReducers({
  todos: TodosReducer,
  filters: filtersReducer,
});
export default rootReducer;
