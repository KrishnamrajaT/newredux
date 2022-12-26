const initialState = 0;

export const reducer = (state = initialState, actions) => {
  const { type } = actions;
  switch (type) {
    case "ADD":
      return state + 1;
    case "DEC":
      return state - 1;

    default:
      return state;
  }
};
