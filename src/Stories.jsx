import React from "react";
import Button from "./Button";
import { useGlobalContext } from "./context";
import Loader from "./Loader";
import "./Stories.css";

const Stories = () => {
  const { isLoading, hits } = useGlobalContext();

  if (isLoading) {
    return <Loader />;
  }

  if (!hits.length) {
    return <h3 className="no-result">No more newses !!!</h3>;
  }

  return (
    <section className="stories-container">
      {hits.map((story) => {
        return <Story key={story.objectID} {...story} />;
      })}
    </section>
  );
};

const Story = ({ title, points, author, num_comments, url, objectID }) => {
  const { removeStory } = useGlobalContext();

  return (
    <article className="story-wrapper">
      <h3 className="story-title">{title}</h3>
      <p className="story-rating-comment">{`${points} points by ${author} | ${num_comments} comments.`}</p>
      <div className="story-col-3">
        <a
          className="read-more-label"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
        <Button className="remove-btn" onClick={() => removeStory(objectID)}>
          Remove
        </Button>
      </div>
    </article>
  );
};

export default React.memo(Stories);
