import React from "react";
import { useGlobalContext } from "./context";

import "./SearchForm.css";

const SearchForm = () => {
  const { setQuery, query } = useGlobalContext();

  return (
    <div className="search-form">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
      />
    </div>
  );
};

export default React.memo(SearchForm);
