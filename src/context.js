import React, { createContext, useContext, useReducer } from "react";
import useDebounce from "./useDebounce";
import { reducer } from "./reducer";
import {
  SET_QUERY,
  SET_DATA,
  SET_LOADING,
  CHANGE_NEXT_PAGE,
  CHANGE_PREV_PAGE,
  REMOVE_STORY
} from "./actions";

const AppContext = createContext({});
const initialState = {
  query: "REACT",
  isLoading: true,
  hits: [],
  nbHits:0,
  nbPages:0,
  page: 0,
  pageNo: 0,
};

const API_ENDPOINT = "http://hn.algolia.com/api/v1";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setQuery = (query) => {
    dispatch({ type: SET_QUERY, payload: query });
  };
  
  const nextPage = () => {
    if (state.pageNo === state.nbPages - 1) {
      dispatch({ type: CHANGE_NEXT_PAGE, payload: 0 });
      return;
    }
    dispatch({ type: CHANGE_NEXT_PAGE, payload: state.pageNo + 1 });
  };

  const prevPage = () => {
    if (state.pageNo === 0) {
      dispatch({ type: CHANGE_PREV_PAGE, payload: state.nbPages - 1 });
      return;
    }
    dispatch({ type: CHANGE_PREV_PAGE, payload: state.pageNo - 1 });
  };

  const removeStory = (id)=>{
    const removed = state.hits.filter(({objectID})=>{
      return objectID !== id
    })
    dispatch({type: REMOVE_STORY, payload : removed})
  }
  const fetchData = async () => {
    dispatch({ type: SET_LOADING, payload: true });
    const response = await fetch(
      `${API_ENDPOINT}/search?query=${state.query}&page=${state.pageNo}`
    );
    const { hits, nbHits, nbPages, page } = await response.json();
    dispatch({ type: SET_LOADING, payload: false });
    dispatch({ type: SET_DATA, payload: { hits, nbHits, nbPages, page } });
  };
  // debounced useEffect
  useDebounce(fetchData, 300, state.query, state.pageNo);

  return (
    <AppContext.Provider value={{ ...state, setQuery, nextPage, prevPage, removeStory }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
