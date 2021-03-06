import {
  getTasksSuccess,
  getTasksError,
  getTasksPending,
  deleteTaskError,
  deleteTaskSuccess,
  deleteTaskPending,
  setInfoForFeedback,
  showFeedbackMessage,
  postTaskError,
  postTaskSuccess,
  editTaskSuccess,
  editTaskError
} from './actions';

export const getTasks = () => {
  return (dispatch) => {
    dispatch(getTasksPending());
    return fetch(`${process.env.REACT_APP_API_URL}/tasks`)
      .then((response) => response.json())
      .then((response) => {
        dispatch(getTasksSuccess(response.data));
        return response.data;
      })
      .catch((error) => {
        dispatch(getTasksError(error.toString()));
      });
  };
};

export const deleteTask = (taskId) => {
  return (dispatch) => {
    dispatch(deleteTaskPending());
    const options = {
      method: 'DELETE',
      url: `${process.env.REACT_APP_API_URL}/tasks/${taskId}`
    };
    return fetch(options.url, options)
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          dispatch(deleteTaskError(response.error));
          dispatch(
            setInfoForFeedback({ title: 'Something went wrong', description: response.message })
          );
        } else {
          dispatch(deleteTaskSuccess(taskId));
          dispatch(
            setInfoForFeedback({
              title: 'Request done!',
              description: response.message
            })
          );
          dispatch(showFeedbackMessage(true));
        }
      })
      .catch((error) => {
        dispatch(deleteTaskError(error));
      });
  };
};

export const postTask = (options) => {
  return (dispatch) => {
    fetch(options.url, options)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (!response.error) {
          dispatch(postTaskSuccess(response.data));
          dispatch(setInfoForFeedback({ title: 'Request done!', description: response.message }));
          dispatch(showFeedbackMessage(true));
        } else {
          dispatch(postTaskError(response.data.message));
          dispatch(
            setInfoForFeedback({ title: 'Something went wrong', description: response.message })
          );
          dispatch(showFeedbackMessage(true));
        }
      })
      .catch((error) => {
        dispatch(postTaskError(error));
      });
  };
};

export const editTask = (options) => {
  return (dispatch) => {
    fetch(options.url, options)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (!response.error) {
          dispatch(editTaskSuccess(response.data));
          dispatch(
            setInfoForFeedback({
              title: 'Request done!',
              description: response.message
            })
          );
          dispatch(showFeedbackMessage(true));
        } else {
          dispatch(editTaskError(response.data.message));
          dispatch(
            setInfoForFeedback({ title: 'Something went wrong.', description: response.message })
          );
          dispatch(showFeedbackMessage(true));
        }
      })
      .catch((error) => {
        dispatch(editTaskError(error));
      });
  };
};
