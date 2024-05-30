import {
  ADDED,
  EDIT,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  TOGGLED,
} from "./actionTypes";

export const added = (text) => {
  return {
    type: ADDED,
    payload: text,
  };
};

export const editTodo = (id) => {
  return {
    type: EDIT,
    payload: {
      id,
      textSelector
    },
  };
};

export const toggled = (id) => {
  return {
    type: TOGGLED,
    payload: id,
  };
};

export const colorSelected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId,
      color,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETED,
    payload: id,
  };
};

export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
