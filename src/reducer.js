const reducer = (state, action) => {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_DATA":
      return { ...state, ...action.payload };
    case "CHANGE_NEXT_PAGE":
      return { ...state, pageNo: action.payload };
    case "CHANGE_PREV_PAGE":
      return { ...state, pageNo: action.payload };
    case "REMOVE_STORY":
      return { ...state, hits: action.payload };
    default:
      throw new Error(`no matches found ${action.type}`);
  }
};

export { reducer };
