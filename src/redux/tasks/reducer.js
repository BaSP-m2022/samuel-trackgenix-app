import {
  GET_TASKS_PENDING,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  DELETE_TASK_ERROR,
  DELETE_TASK_PENDING,
  DELETE_TASK_SUCCESS
} from './constants';

const initialState = {
  list: [],
  pending: false,
  error: ''
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS_PENDING:
      return {
        ...state,
        pending: true
      };
    case GET_TASKS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        pending: false
      };
    case GET_TASKS_ERROR:
      return {
        ...state,
        error: action.payload,
        pending: false
      };
    case DELETE_TASK_PENDING:
      return {
        ...state,
        pending: true
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        list: state.list.filter((task) => task._id !== action.payload),
        pending: false
      };
    case DELETE_TASK_ERROR:
      return {
        ...state,
        error: action.payload,
        pending: false
      };
    default:
      return state;
  }
};
