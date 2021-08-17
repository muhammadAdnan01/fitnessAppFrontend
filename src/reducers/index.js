const reducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_NEWS":
      console.log("action.type", action.type);
      return { ...state, loading: true };

    case "NEWS_RECEIVED":
      return { ...state, NEWS_RECEIVED: action.json };
    default:
      return state;
  }
};
export default reducer;
