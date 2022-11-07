import React from "react";
import SearchForm from "./SearchForm";
import Paginate from "./Paginate";
import Stories from "./Stories";

import "./App.css";

const App = () => {
  return (
    <main className="app">
      <h1 style={{marginTop:'24px'}}>Search Hacker News</h1>
      <SearchForm />
      <Paginate />
      <Stories />
    </main>
  );
};

export default App;
