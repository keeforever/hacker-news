import React from "react";
import Button from "./Button";
import { useGlobalContext } from "./context";
import "./Paginate.css";

const Paginate = () => {
  const { page, nbPages, nextPage, prevPage } = useGlobalContext();

  if (!nbPages) {
    return null;
  }

  return (
    <div className="paginate-container">
      <Button className="paginate-btn" onClick={prevPage}>
        Prev
      </Button>
      <span className="page-info">{`${page+1} of ${nbPages}`}</span>
      <Button className="paginate-btn" onClick={nextPage}>
        Next
      </Button>
    </div>
  );
};

export default Paginate;
