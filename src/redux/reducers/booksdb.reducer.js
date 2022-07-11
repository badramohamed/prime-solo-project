const booksdb = (state = [], action) => {
  switch (action.type) {
    case "SET_DATABOOKS":
      return action.payload;
    default:
      return state;
  }
};

export default booksdb;
