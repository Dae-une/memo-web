const ADD_LIST = "ADD_LISt";
const DELETE_LIST = "DELETE_LIST";
const GET_ID = "GET_ID";
const ADD_BODY = "ADD_BODY";

const initialState = {
  List: [],
  memo: {
    title: "",
    body: "",
    id: "0",
  },
};

export const addMemo = (payload) => {
  return {
    type: ADD_LIST,
    payload,
  };
};

export const deleteMemo = (payload) => {
  return {
    type: DELETE_LIST,
    payload,
  };
};
export const getId = (payload) => {
  return {
    type: GET_ID,
    payload,
  };
};
export const addBody = (payload) => {
  return {
    type: ADD_BODY,
    payload,
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        List: [
          ...state.List,
          { title: action.payload.title, id: action.payload.id, body: "" },
        ],
      };
    case ADD_BODY:
      const memoList = { ...state.List };
      const idx = state.List.findIndex(
        (memo) => memo.id === parseInt(action.payload.id)
      );
      memoList[idx].body = action.payload.body;
      return { ...state, memoList };
    case GET_ID:
      return {
        ...state,
        memo: state.List.find((memo) => memo.id === parseInt(action.payload)),
      };
    case DELETE_LIST:
      return {
        ...state,
        List: state.List.filter((memo) => memo.id !== parseInt(action.payload)),
      };
    default:
      return state;
  }
};

export default rootReducer;
