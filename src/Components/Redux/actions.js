export const UPDATE_USER = "UPDATE_USER";
export const CREATE_USER = "CREATE_USER";

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};

export const createUser = (user) => {
  return {
    type: CREATE_USER,
    payload: user,
  };
};
