export const getUser = (state) => state.email;

const createActionName = (actionName) => `app/users/${actionName}`;
const LOG_IN = createActionName('LOG_IN');
const LOG_OUT = createActionName('LOG_OUT');

export const logIn = (payload) => {
  localStorage.setItem('loggedInUser', payload.email);
  return {
    type: LOG_IN,
    payload,
  };
};

export const logOut = () => {
  localStorage.removeItem('loggedInUser');
  return {
    type: LOG_OUT
  };
};

const SAVE_USER_TO_LOCAL_STORAGE = createActionName('SAVE_USER_TO_LOCAL_STORAGE');
export const saveUserToLocalStorage = () => ({
  type: SAVE_USER_TO_LOCAL_STORAGE,
});

const initialState = {
  login: localStorage.getItem('loggedInUser') || null,
  request: { pending: false, error: null, success: false },
};

const usersReducer = (statePart = initialState, action) => {
  switch (action.type){
    case LOG_IN:
      return { ...statePart, email: action.payload.email};
    case LOG_OUT:
      return { ...statePart, login: null };
    case SAVE_USER_TO_LOCAL_STORAGE:
      localStorage.setItem('loggedInUser', JSON.stringify(statePart.login));
      return statePart;
    default:
      return statePart;
  }
};

export default usersReducer;